//EVENT MODEULES
// Node.js hasa built in modeules called "Events"
// where you can create, fire and listen to your own events

// Example 1: registering for event to be fired only one ime using once.
// Example 2: create an event emitter instance and reister a couple of callbacks
// Example 3: registering for the event with callback parameters

//class
const EventEmitter = require("events");
//creating a new instance of class EventEmitter
const event = new EventEmitter();

event.on("sayName", () => {// ( .on() is like addEventListner in js)
    console.log('my name is Munsif');
});

//Example 2
// 1 event pa hammultiple function ko call krsakty h 
event.on("sayName", () => {// ( .on() is like addEventListner in js)
    console.log('my name is Kazmii');
});
event.on("sayName", () => {// ( .on() is like addEventListner in js)
    console.log('my name is Hamza');
});
event.emit("sayName");//creating event only to be fired once


//Eample 3 : callBack parametrs on events
event.on("checkPageStatus", (psc, msg, pName) => {
    console.log(`You are on ${pName} page and page status is ${psc} and page messae is ${msg}`)
});
event.emit("checkPageStatus", 200, "ok", "/home");

