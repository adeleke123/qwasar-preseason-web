## Js Quest06
Remember to git add && git commit && git push each exercise!

We will execute your function with our test(s), please DO NOT PROVIDE ANY TEST(S) in your file

For each exercise, you will have to create a folder and in this folder, you will have additional files that contain your work. Folder names are provided at the beginning of each exercise under `submit directory` and specific file names for each exercise are also provided at the beginning of each exercise under `submit file(s)`
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Introduction
Performing operations on a `string` is a major part of our job as a Developer.

![character-arraych](https://user-images.githubusercontent.com/51156057/214148100-e1ff3920-a985-4535-80e5-df4fbf9510b6.png)

A `string` is an array of characters and you can loop through it.

It makes total sense since we are building a User Interface and the user is mostly human... and communication is through words. :-)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

| Js Quest06	| My String Index |
| ----------- | --------------- |
| Submit directory | ex00 |
| `Submit file` |	`my_string_index.js` |

## Description
Create a `my_string_index` function which takes `2` parameters (`haystack` and `needle`) and locates the first occurrence of the character needle in the string haystack and returns the position.

You can think of this function as: is there an L (character) in my string "helLo"?

The objective is to build a loop that has an if statement which returns the characters position when it matches the `right` character.

## Function prototype (javascript)
```
/*
**
** QWASAR.IO -- my_string_index
**
**
** @param {String} param_1
** @param {Character} param_2
** @return {integer}

**
*/


function my_string_index(param_1, param_2) {

};
```
## Example 00
```
Input: "hello" && "l"
Output: 
Return Value: 2
```
## Example 01
```
Input: "aaaaa" && "b"
Output: 
Return Value: -1
```
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Js Quest06	My Upcase
Submit directory	ex01
Submit file	my_upcase.js
Description
Create a my_upcase function that takes a string as a parameter and returns the uppercase version of it.

Function prototype (javascript)
/*
**
** QWASAR.IO -- my_upcase
**
**
** @param {String} param_1
** @return {string}

**
*/


function my_upcase(param_1) {

};
Example 00

Input: "aBc"
Output: 
Return Value: "ABC"
Example 01

Input: ""
Output: 
Return Value: ""
Tip
Google upcase string YOURCODINGLANGUAGE

Js Quest06	My Downcase
Submit directory	ex02
Submit file	my_downcase.js
Description
Create a my_downcase function that takes a string as a parameter and returns the lowercase version of it.

Function prototype (javascript)
/*
**
** QWASAR.IO -- my_downcase
**
**
** @param {String} param_1
** @return {string}

**
*/


function my_downcase(param_1) {

};
Example 00

Input: "aBc"
Output: 
Return Value: "abc"
Example 01

Input: ""
Output: 
Return Value: ""
Tip
Google downcase string YOURCODINGLANGUAGE

Js Quest06	My Size
Submit directory	ex03
Submit file	my_size.js
Description
Create a my_size function that takes a string as a parameter and returns its length.

Function prototype (javascript)
/*
**
** QWASAR.IO -- my_size
**
**
** @param {String} param_1
** @return {integer}

**
*/


function my_size(param_1) {

};
Example 00

Input: "aBc"
Output: 
Return Value: 3
Example 01

Input: ""
Output: 
Return Value: 0
Example 02

Input: "AbcE Fgef1"
Output: 
Return Value: 10
Tip
Google length string YOURCODINGLANGUAGE

Js Quest06	My Each
Submit directory	ex04
Submit file	my_each.js
Description
Time to print each element of an array.

Create a my_each function that receives an array of strings as a parameter and iterates through the array. Use a function to print each value.
This function returns nothing.

Function prototype (javascript)
/*
**
** QWASAR.IO -- my_each
**
**
** @param {String[]} param_1
**
*/


function my_each(param_1) {

};
Example 00

Input: ["blah1", "blah2", "blah3"]
Output: blah1
blah2
blah3

Return Value: nil
Example 01

Input: ["blah1", "blah2"]
Output: blah1
blah2

Return Value: nil
Example 02

Input: ["1arg"]
Output: 1arg

Return Value: nil
Tips
Google while YOURCODINGLANGUAGE
Google for YOURCODINGLANGUAGE
Google array.length YOURCODINGLANGUAGE
