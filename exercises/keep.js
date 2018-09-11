'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

 function keepFirst(str){
 	let res = str.slice(0, 2);
 	return res;
 }

 function keepLast(str){
 	let len = str.length;
 	let res = str.slice(len-2, len);
 	return res;
 }

 function keepFirstLast(str){
 	let len = str.length;
 	let part1 = str.slice(3, 5);
 	return part1;
 }


//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')
assert.deepStrictEqual(keepFirst("Hello World"), 'He')
assert.deepStrictEqual(keepLast("Hello World"), 'ld')
assert.deepStrictEqual(keepFirstLast("Hello World"), 'lo')
// End of tests */
