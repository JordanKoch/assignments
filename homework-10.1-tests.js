var assert = require("assert"),
    hallway = require("./homework-10.1-code.js");

assert(hallway);
assert(hallway.doors);

assert.equal(hallway.CLOSED, 0);
assert.equal(hallway.OPENED, 1);

assert.equal(hallway.toggle(hallway.CLOSED), hallway.OPENED);
assert.equal(hallway.toggle(hallway.OPENED), hallway.CLOSED);
assert.equal(hallway.toggle('askew'), undefined);

assert.equal(hallway.doors.length, 5);
assert.equal(hallway.walk(), undefined);

assert.deepEqual(hallway.doors, [ hallway.CLOSED, hallway.CLOSED, hallway.CLOSED, hallway.CLOSED, hallway.CLOSED ]);
assert.deepEqual(hallway.walk(0), [ hallway.CLOSED, hallway.CLOSED, hallway.CLOSED, hallway.CLOSED, hallway.CLOSED ]);
assert.deepEqual(hallway.walk(1), [ hallway.OPENED, hallway.OPENED, hallway.OPENED, hallway.OPENED, hallway.OPENED ]);