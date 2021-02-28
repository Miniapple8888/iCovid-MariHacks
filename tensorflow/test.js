const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

let xs = tf.tensor1d([0, 1, 2, 3, 4, 5])
let ys = tf.tensor1d([1, 3, 5, 7, 9, 11])

const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}))

model.compile({
    loss: 'meanSquaredError',
    optimizer: 'sgd',
    metrics: ['mae']
});

async function train() {
    await model.fit(xs, ys, {
        epochs: 100,
        verbose: 2
    })

    model.predict(tf.tensor1d([7]), [1, 1]).print();
}

train();

