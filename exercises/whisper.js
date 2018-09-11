'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

 function whisper(str){
 	return "*"+str.toLowerCase()+"*";
 }


//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')
assert.deepStrictEqual(whisper("AbC"), '*abc*')
assert.deepStrictEqual(whisper("Hello World"), '*hello world*')

// End of tests */
