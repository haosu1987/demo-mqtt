/*jshint node:true*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

const mqtt_port = process.env.VCAP_APP_MQTT_PORT || 3688;

// This application uses express as it's web server
// for more info, see: http://expressjs.com
var express = require('express');
var mqtt = require('./mqtt')

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

var hello = require('./hello')

app.use('/hello', hello);

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, appEnv.bind, function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

mqtt.start(mqtt_port, function() {
    console.log("mqtt server starting on " + appEnv.bind + ":" + mqtt_port);
});
