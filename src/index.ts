import brain from 'brain.js';
import trainingData from './Data/temperatures.json';

const net = new brain.NeuralNetwork();

net.train(trainingData, { iterations: 5000 });

var output = net.run({
  temperature: 30,
});

console.log(output);
