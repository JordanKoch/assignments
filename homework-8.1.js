var assert = require("assert");

/**
 * write functions for addition, subtraction, multiplication and division; cover
 * positive, negative, and zero; do not generate an error, even when dividing by
 * zero; write assertions for every case
 */

/**
 * Test plan for addition():
 *
 *  1st | 2nd | output
 * -----+-----+-------
 *   -1 |  -1 |  -2
 *   -1 |  +0 |  -1
 *   -1 |  +1 |  +0
 *   +0 |  -1 |  -1
 *   +0 |  +0 |  +0
 *   +0 |  +1 |  +1
 *   +1 |  -1 |  +0
 *   +1 |  +0 |  +1
 *   +1 |  +1 |  +2
 */

/**
 * Test plan for subtraction():
 *
 *  1st | 2nd | output
 * -----+-----+-------
 *   -1 |  -1 |  +0
 *   -1 |  +0 |  -1
 *   -1 |  +1 |  -2
 *   +0 |  -1 |  +1
 *   +0 |  +0 |  +0
 *   +0 |  +1 |  -1
 *   +1 |  -1 |  +2
 *   +1 |  +0 |  +1
 *   +1 |  +1 |  +0
 */

/**
 * Test plan for multiplication():
 *
 * 1st / 2nd / output
 * -----+-----+------
 *   -1 |  -1 |  +1
 *   -1 |  +0 |  +0
 *   -1 |  +1 |  -1
 *   +0 |  -1 |  +0
 *   +0 |  +0 |  +0
 *   +0 |  +1 |  -0
 *   +1 |  -1 |  -1
 *   +1 |  +0 |  +0
 *   +1 |  +1 |  +1
 */

 /**
 * Test plan for division():
 *
 * 1st / 2nd / output
 * -----+-----+------
 *   -1 |  -1 |  +1
 *   -1 |  +0 |  +NaN
 *   -1 |  +1 |  -1
 *   +0 |  -1 |  +0
 *   +0 |  +0 |  +NaN
 *   +0 |  +1 |  +0
 *   +1 |  -1 |  -1
 *   +1 |  +0 |  +NaN
 *   +1 |  +1 |  +1
 */