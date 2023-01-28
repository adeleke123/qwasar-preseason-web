my_strchr
Description
Create a function that searches for the first occurrence of the character c (an unsigned char) in the string pointed to by the argument str. The terminating null character is considered to be part of the string. The function should return a pointer pointing to the last matching character, or null if no match was found.

Function prototype (c)
/*
**
** QWASAR.IO -- my_strchr
**
** @param {char*} param_1
** @param {char} param_2
**
** @return {char*}
**
*/

char* my_strchr(char* param_1, char param_2)
{

}
Example 00

Input: "abcabc" && "b"
Output: 
Return Value: "bcabc"
Example 01

Input: "121212" && "2"
Output: 
Return Value: "21212"
Example 02

Input: "abc" && "d"
Output: 
Return Value: nil
