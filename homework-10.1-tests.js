/*
//Rewrote code up to function
//Successful TDD up to that point
//Getting the hang of writing js
*/

var assert = require("assert"),
    hallway = require("./2014-04-04-code.js");

assert(hallway);
assert(hallway.doors);

assert.equal(hallway.CLOSED, -1);
assert.equal(hallway.OPENED, +1);

assert.equal(hallway.toggle(hallway.CLOSED), hallway.OPENED);
assert.equal(hallway.toggle(hallway.OPENED), hallway.CLOSED);
assert.equal(hallway.toggle('askew'), undefined);