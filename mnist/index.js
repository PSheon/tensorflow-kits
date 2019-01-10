require('@tensorflow/tfjs-node')
const tf = require('@tensorflow/tfjs')
const _ = require('lodash')
const LogisticRegression = require('./logistic-regression')
const plot = require('node-remote-plot')
const mnist = require('mnist-data')

function loadData() {
  const mnistData = mnist.training(0, 60000)
  
  const features = mnistData.images.values.map(image => _.flatMap(image));
  const encodedLabels = mnistData.labels.values.map(labelIndex => {
    const row = new Array(10).fill(0)
    row[labelIndex] = 1
    return row
  })

  return { features, labels: encodedLabels } 
}

const { features, labels } = loadData()

const regression = new LogisticRegression(features, labels, {
  learningRate: 1,
  iterations: 40,
  batchSize: 500
})

regression.train()

const testMnistData = mnist.testing(0, 10000)
const testFeatures = testMnistData.images.values.map(image => _.flatMap(image))
const testEncodedLabels = testMnistData.labels.values.map(labelIndex => {
  const row = new Array(10).fill(0)
  row[labelIndex] = 1
  return row
})


const accuracy = regression.test(testFeatures, testEncodedLabels)

console.log('accuracy is : ', accuracy)

plot({
  x: regression.costHistory.reverse(),
  
})