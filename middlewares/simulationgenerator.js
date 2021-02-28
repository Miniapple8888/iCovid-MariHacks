const simulation = require("./simulation");

function generate_simulation(
    population, // Population of the country
    mask_percentage, // Percentage of people who wear masks (0 to 1)
    mask_effectiveness, // How much does the mask block the virus (0: no effect, 1: 100% effectiveness)
    no_mask_effectiveness, // How much does the surrounding air block the virus (0: the virus does not get lost in the air, 1: the virus cannot go throught the air)
    hygiene, // How clean are people (0: ablsolutely disgusting, 1: clean af)
    days_to_recover, // How many days does it take for someone to recover (1 to inf days)
    days) { // How many days to run the simulation for

let healthy = population - 1.0;
let infected = 1.0;
let recovered = 0.0;


let spread_coefficient = (mask_percentage * (1.0 - mask_effectiveness) + (1.0 - mask_percentage) * no_mask_effectiveness) * hygiene;

console.log(spread_coefficient)

let results = {'healty': new Array(days), 'infected': new Array(days), 'recovered': new Array(days)}

let deltaH, deltaI, deltaR;

for (let i = 0; i < days; i++) {
    deltaH = -spread_coefficient*infected*healthy/population;
    deltaI = spread_coefficient*infected*healthy/population - infected/days_to_recover;
    deltaR = infected/days_to_recover;

    healthy += deltaH;
    infected += deltaI;
    recovered += deltaR;

    results['healty'][i] = healthy;
    results['infected'][i] = infected;
    results['healty'][i] = healthy;

}

return results;

}

console.log(generate_simulation(1000, 0.8, 0.8, 0.4, 0.9, 14, 100));
module.exports = {
    async generateSimulation(req, res) {
        const population = req.body.population || 1000; // Requested country
        const mask_percentage = req.body.mask_percentage || 0.8; // Convert string date to moment object date
        const mask_effectiveness = req.body.mask_effectiveness || 0.8;
        const no_mask_effectiveness = req.body.no_mask_effectiveness || 0.4;
        const hygiene = req.body.hygiene || 0.9;
        const days_to_recover = req.body.days_to_recover || 14;
        const days = req.body.days || 100;
        let data = generate_simulation(population, mask_percentage, mask_effectiveness, no_mask_effectiveness, hygiene, days_to_recover, days);
        return res.send({data: data, msg: "Working on it"});
    },
}