const rp = require('request-promise'); // Request GET data online
const moment = require('moment'); // Time manipulation lib

module.exports = {
    async createSimulation() {
        
    },
    async getLiveCountry() { // Data for client chart covid 19 cases
        const country = req.body.country || "Canada"; // Requested country
        const timeInterval = req.body.timeInterval || "1d"; // Requested time interval
        const element = req.body.element || "confirmed"; // What data to send

        rp.get({uri: "https://pomber.github.io/covid19/timeseries.json", json: true}).then(data => { // Request live data from github repository
            var countryData = data.find(country) || []; // Get array data only relevant to country
            if (countryData.length > 0) {
                return res.send({data: countryData, msg: "Found available data. "});
            } else {
                return res.send({ data: countryData, msg: "No data is available for that country." }); // No data for specified country was found
            }
        }).catch(err => {
            return res.send({ data: [], msg: "API error." }); // Could not access data online
            console.log(err);
        });
    }
}