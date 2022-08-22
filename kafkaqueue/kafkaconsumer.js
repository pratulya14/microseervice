const axios = require('axios')
const { Kafka } = require('kafkajs')
const kafka = new Kafka({
    clientId: "myserviceapp",
    brokers: ['localhost:9092']

})

const consumer = kafka.consumer({ groupId: 'myitemgrp' })
consumer.connect()
consumer.subscribe({ topic: 'item-topic', fromBeginning: true })

module.exports = function() {

    consumer.run({
        eachMessage: async({ topic, partition, message }) => {
            console.log(JSON.parse(message.value))

            axios({ method: 'post', url: 'http://localhost:5500/getnotification', data: JSON.parse(message.value) }).then((e) => {
                console.log(e.data)
            })
        }

    })
}