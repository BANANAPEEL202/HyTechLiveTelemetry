/**
 * Basic Realtime telemetry plugin using websockets.
 */
import Paho from 'paho-mqtt'; 
export function RealtimeTelemetryPlugin() {
    return function (openmct) {
        var client = new Paho.Client('wss://3.134.2.166/1884',"unique_ID"); 
        //var client = new Paho.Client('ws://3.134.2.166/1884',"unique_ID"); //causes insecure websocket error
        //var client = new Paho.Client('3.134.2.166', 1884, "/", "unique_ID");
        //var client = new Paho.Client('mqtt://3.134.2.166:1883', "unique_ID");
        var globalChannels = [];
        const myClientConnected = function () {
            console.log("connected");
            //console.log("Channel: "+ (domainObject.identifier.key).replaceAll(".", "/"));
            for (let i = 0; i < globalChannels.length; i++) {
                client.subscribe(globalChannels[i], 0);
                console.log("subscribed")
            }
            //client.subscribe("MOTOR_CONTROLLER/mc_rl/torque_current", 0);
        }



        //var socket = new WebSocket(location.origin.replace(/^http/, 'ws') + '/realtime/');
        var listener = {};

        client.onMessageArrived = function (message) {
            let channel;
            channel = (message.destinationName.replaceAll("/", "."));
            if (listener[channel]) {
                listener[channel]({
                    timestamp: new Date().getTime(),
                    value: parseFloat(message.payloadString),
                    id: Date.now(),
                });
            }
            console.log(message.payloadString)
        };

        var provider = {          
            supportsSubscribe: function (domainObject) {
                return domainObject.type === 'dashboard.telemetry';
            },
            subscribe: function (domainObject, callback) {
                listener[domainObject.identifier.key] = callback;
                globalChannels.push((domainObject.identifier.key).replaceAll(".", "/"));
         
                if (client.isConnected()) {
                    client.disconnect();
                }
                client.connect({
                    //useSSL: true,
                    onSuccess: myClientConnected
                });

                return function unsubscribe() {
                    //delete listener[(domainObject.identifier.key)];
                    //client.unsubscribe(domainObject.identifier.key);
                    client.disconnect();
                };
            }
        };

        openmct.telemetry.addProvider(provider);

        /*
        var socket = new WebSocket(location.origin.replace(/^http/, 'ws') + '/realtime/');
        var listener = {};

        socket.onmessage = function (event) {
            point = JSON.parse(event.data);
            if (listener[point.id]) {
                listener[point.id](point);
            }
        };

        var provider = {
            supportsSubscribe: function (domainObject) {
                return domainObject.type === 'dashboard.telemetry';
            },
            subscribe: function (domainObject, callback) {
                listener[domainObject.identifier.key] = callback;
                socket.send('subscribe ' + domainObject.identifier.key);
                return function unsubscribe() {
                    delete listener[domainObject.identifier.key];
                    socket.send('unsubscribe ' + domainObject.identifier.key);
                };
            }
        };

        openmct.telemetry.addProvider(provider);

         */

        /*

         */
    }


}
