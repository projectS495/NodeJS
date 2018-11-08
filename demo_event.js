var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

eventEmitter.on('testEvent',function(){
    console.log('This is the test event');
});
//Fire the 'scream' event:
eventEmitter.emit('scream');

eventEmitter.emit('testEvent');