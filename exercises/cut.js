'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

 function cutFirst(str){
 	let len = str.length;
 	let res = str.slice(2, len);
 	return res;
 }

 function cutLast(str){
 	let len = str.length;
 	let res = str.slice(0, len-2);
 	return res;
 }

 function cutFirstLast(str){
 	let len = str.length;
 	let res = str.slice(2, len-2);
 	return res;
 }

//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')
assert.deepStrictEqual(cutFirst("Hello World"), 'llo World')
assert.deepStrictEqual(cutLast("Hello World"), 'Hello Wor')
assert.deepStrictEqual(cutFirstLast("Hello World"), 'llo Wor')
// End of tests */
