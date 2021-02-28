const {simulation, predict_cases, generate_simulation} = require("../middlewares");
const path = require('path');

module.exports = (app) => {
    app.get('/', (req, res) => res.status(200).send({
        message: 'Welcome to the users API!',
    }));

    app.get('/live-simulation-ar', (req, res) => { res.sendFile(path.join(__dirname + '/../ar/index.html')); });
    app.get('/ar/pattern.patt', (req, res) => { res.sendFile(path.join(__dirname + '/../ar/pattern-Untitled.patt')); });
    app.get('/ar/world-map.png', (req, res) => { res.sendFile(path.join(__dirname + '/../ar/world-map.png')); });
    app.post('/simulate', simulation.createSimulation);
    app.post('/stats', simulation.getCovidStats);
    app.post('/multi-stats', simulation.getMultiCovidStats);
    app.post('/predict', predict_cases.predict);
    app.post('/generate-simulation', generate_simulation.generateSimulation);
}