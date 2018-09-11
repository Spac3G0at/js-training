'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

 function yell(str){
 	return str.toUpperCase();
 }


//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')
assert.deepStrictEqual(yell("abc"), 'ABC')
assert.deepStrictEqual(yell("hello world"), 'HELLO WORLD')
// End of tests */
