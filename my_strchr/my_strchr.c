#include <string.h>
#include <stdio.h>
char* my_strchr(char* str1, char str2)
{
    char* str3[strlen(str1)];
    int count = 0;
    for (int i = 0 ; i < strlen(str1) ; i++) {
        if(str1[i] != str2){
            count++;
        }else if(str1[i] == str2){
            for (int j = 0 ; j < strlen(str1) ; j++) {
                str3[j] = &str1[i];
                i++;
            }
        }
    }
    if(count == strlen(str1)){
        return NULL;
    }else{
        return *str3;
    }
}
/* 
This code defines a function called "my_strchr" that takes in two parameters: a pointer to a character array (a string) called "str1", and a single character called "str2". The function uses a for loop to iterate through each character in "str1" and checks if the character is equal to "str2". If the character is not equal to "str2", the count variable is incremented. If the character is equal to "str2", another for loop is used to set the elements of an array called "str3" to the address of the remaining characters in "str1" starting from the current index, and the current index is incremented.

If the count variable is equal to the length of "str1", the function returns a null pointer, indicating that "str2" was not found in "str1". If "str2" was found in "str1", the function returns the first element of "str3".

This function is similar to the strchr function in C library but this function is not a standard C library function and it has some issues.

It's not incrementing the i variable in the second for loop, so the function will be stuck in an infinite loop and also it's declaring str3 as an array of pointers to char but it's using it as an array of char.
*/
