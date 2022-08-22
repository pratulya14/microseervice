const { Kafka } = require('kafkajs')
const kafka = new Kafka({
    clientId: "myserviceapp",
    brokers: ['localhost:9092']

})

const producer = kafka.producer()
producer.connect()
module.exports = function(message) {

    producer.send({ topic: 'item-topic', messages: [{ value: message }] })
}