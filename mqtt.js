var mosca = require('mosca');

var mqttport = process.env.VCAP_APP_MQTTPORT || 8000;

exports.start = function () {
    var server = new mosca.Server({
        port: mqttport
    });

    server.on('clientConnected', onClientConnected);
    server.on('ready', onReady);
}

function onClientConnected(client) {
    console.log('Client <' + client.id + '> is connected.')
}

function onReady() {
    console.log('MQTT server is listening on', mqttport)
}
