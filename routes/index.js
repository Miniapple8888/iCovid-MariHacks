const {simulation} = require("../middlewares");
const path = require('path');

module.exports = (app) => {
    app.get('/', (req, res) => res.status(200).send({
        message: 'Welcome to the users API!',
    }));

    app.get('/live-simulation-ar', (req, res) => {
        res.sendFile(path.join(__dirname + '/../ar/index.html'));
    });
    app.get('/ar/index.js', (req, res) => {
        res.sendFile(path.join(__dirname + '/../ar/js/index.js'));
    });
    app.post('/simulate', simulation.createSimulation);
    app.post('/stats', simulation.getCovidStats);
    app.post('/multi-stats', simulation.getMultiCovidStats);
}