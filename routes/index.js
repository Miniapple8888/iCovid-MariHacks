const {simulation} = require("../middlewares");

module.exports = (app) => {
    app.get('/', (req, res) => res.status(200).send({
        message: 'Welcome to the users API!',
    }));

    app.post('/simulate', simulation.createSimulation);
    app.post('/stats', simulation.getCovidStats);
    app.post('/multi-stats', simulation.getMultiCovidStats);
}