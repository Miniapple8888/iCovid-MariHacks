const rp = require('request-promise'); // Request GET data online
const moment = require('moment'); // Time manipulation lib
const fs = require('fs');

module.exports = {
    async createSimulation(req, res) {
        
    },
    async getLocation(country) {
        var rawdata = fs.readFileSync('countries_location.json');
        var data = JSON.parse(rawdata);
        var country = data[country] || false;
        if (country) {
            return { lat: country.latitude, long: country.longitude };
        } else {
            return null;
        }
    },
    async getMultiCovidStats(req, res) {
        const countries = req.body.countries || "Canada"; // Requested country
        const date = req.body.date; // Convert string date to moment object date
        const subject = req.body.subject || "confirmed"; // Desired data (confirmed, deaths, recovered)

        rp.get({uri: "https://pomber.github.io/covid19/timeseries.json", json: true}).then(data => { // Request live data from github repository
            var returnData = [];
            for (var c = 0; c < countries.length; c++) {
                var countryData = data[countries[c]] || []; // Get array data only relevant to country
                var points = { country: countries[c], data: [] };
                if (countryData.length > 0) {
                    for (var d = 0; d < countryData.length; d++) {
                        if (countryData[d].date === date) {
                            console.log("found")
                            var value = countryData[d][subject] - countryData[d-1][subject]; // Get relative value for 1 day
                            if (value < 0) value == 0; // If negative, then out of maximums of data set
                            points.data.push({ date: countryData[d].date, value: value, location: this.getLocation(countries[c]) }); // Add valid data to array
                            break;
                        } else {
                            continue;
                        }
                    }
                }
                returnData.push(points);
            }
            return res.send({data: returnData, msg: "Found available data. "}); // Return results
        }).catch(err => {
            console.log(err);
            return res.send({ data: [], msg: "API error." }); // Could not access data online
        });
    },
    async getCovidStats(req, res) { // Data for client chart covid 19 cases
        const country = req.body.country || "Canada"; // Requested country
        const startDate = moment(req.body.startDate, 'YYYY-MM-DD') || moment().format('YYYY-MM-DD'); // Convert string date to moment object date
        const endDate = moment(req.body.endDate, 'YYYY-MM-DD') || moment().format('YYYY-MM-DD');
        const subject = req.body.subject || "confirmed"; // Desired data (confirmed, deaths, recovered)

        rp.get({uri: "https://pomber.github.io/covid19/timeseries.json", json: true}).then(data => { // Request live data from github repository
            var countryData = data[country] || []; // Get array data only relevant to country
            if (countryData.length > 0) {
                var returnData = [];
                for (var d = 0; d < countryData.length; d++) {
                    if (moment(countryData[d].date, 'YYYY-MM-DD').isBetween(startDate, endDate)) { // If date is between range
                        returnData.push({ date: countryData[d].date, value: countryData[d][subject] }); // Add valid data to array
                    }
                }
                return res.send({data: returnData, msg: "Found available data. "}); // Return results
            } else {
                return res.send({ data: countryData, msg: "No data is available for that country." }); // No data for specified country was found
            }
        }).catch(err => {
            console.log(err);
            return res.send({ data: [], msg: "API error." }); // Could not access data online
        });
    }
}