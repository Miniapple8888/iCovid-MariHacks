const tf = require('@tensorflow/tfjs');
const tfn = require('@tensorflow/tfjs-node');

class lambdaLayer extends tf.layers.Layer {
    constructor(config) {
        super(config);
        if (config.name === undefined) {
            config.name = ((+new Date) * Math.random()).toString(36); //random name from timestamp in case name hasn't been set
        }
        this.name = config.name;
        this.lambdaFunction = config.lambdaFunction;
        this.lambdaOutputShape = config.lambdaOutputShape;
    }

    call(input) {
        return tf.tidy(() => {
            let result = null;
            eval(this.lambdaFunction);
            return result;
        });
    }

    computeOutputShape(inputShape) {
        if (this.lambdaOutputShape === undefined) { //if no outputshape provided, try to set as inputshape
            return inputShape[0];
        } else {
            return this.lambdaOutputShape;
        }
    }

    getConfig() {
        const config = super.getConfig();
        Object.assign(config, {
            lambdaFunction: this.lambdaFunction,
            lambdaOutputShape: this.lambdaOutputShape
        });
        return config;
    }

    static get className() {
        return 'lambdaLayer';
    }
}
tf.serialization.registerClass(lambdaLayer);


async function loadModel() {
    // console.log('Before Handle!')
    const hand = tfn.io.fileSystem('./model.json');
    console.log(hand)
    const model = await tf.loadLayersModel(hand);
    console.log('After Model!')
    return model;
}


const model = loadModel();//.then(function f(r) {console.log(r)});
console.log(model);

// async function predict_covid_cases(
//     currentInfectedCount, // The current amount of the population that is infected
//     past_r_coefficient) { // The last 8 values (If more or less it will not work)

//     const xs = tf.tensor2d(past_r_coefficient, [8, 1])

//     const prediction = model.predict(xs);

//     console.log(prediction)

// }

// predict_covid_cases(1000, [1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01])