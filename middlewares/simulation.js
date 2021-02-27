const rp = require('request-promise'); // Request GET data online
const moment = require('moment'); // Time manipulation lib

module.exports = {
    async createSimulation(req, res) {
        
    },
    async getCovidStats(req, res) { // Data for client chart covid 19 cases
        const country = req.body.country || "Canada"; // Requested country
        const startDate = moment(req.body.startDate, 'YYYY-MM-DD') || moment().format('DD-MM-YYYY'); // Convert string date to moment object date
        const endDate = moment(req.body.endDate, 'YYYY-MM-DD') || moment().format('YYYY-MM-DD');
        const subject = req.body.subject || "confirmed"; // Desired data (confirmed, deaths, recovered)

        rp.get({uri: "https://pomber.github.io/covid19/timeseries.json", json: true}).then(data => { // Request live data from github repository
            var countryData = data[country] || []; // Get array data only relevant to country
            if (countryData.length > 0) {
                var returnData = [];
                for (var d = 0; d < countryData.length; d++) {
                    if (moment(moment(countryData[d].date, 'YYYY-MM-DD')).isBetween(startDate, endDate)) { // If date is between range
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