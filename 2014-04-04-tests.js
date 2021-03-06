var assert = require('assert'),
    hallway = require('./2014-04-04-code.js');

/**
 * First test to make sure all doors in Hallway are closed
 * Door #  | open(1)/closed(-1)
 * 1  | -1
 * 2  | -1
 * 3  | -1
 * 4  | -1
 * 5  | -1
 * 6  | -1
 * 7  | -1
 * 8  | -1
 * 9  | -1
 * 10 | -1
 */
assert(hallway);

assert(hallway.doors);

assert.equal(hallway.doors.length, 10);

    for (var a = 0; a<= hallway.doors.length; a++) {
    assert.equal(hallway.doors [a], -1, 'Error on key ' +a);
    }

/* // Maybe do this...?
assert(hallway.doors);
assert.equal(hallway.doors(10), {
    1: -1, 2: -1, 3: -1, 4: -1, 5: -1, . . .
});
assert.equal(hallway.doors(11), {
    . . . 11: -1
});
*/