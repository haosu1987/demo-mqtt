var mosca = require('mosca');

var pt, server;

exports.start = function (p, onReady) {
    pt = p;
    server = new mosca.Server({
        port: p
    });

    server.on('clientConnected', onClientConnected);
    server.on('ready', onReady);
}

function onClientConnected(client) {
    console.log('Client <' + client.id + '> is connected.')
}

exports.publish = function (msg) {
    server.publish(msg);
}
