int my_string_index(char* haystack, char needle)
{
for (int i = 0; haystack[i] != '\0'; i++)
{
if (haystack[i] == needle)
{
return i;
}
}
return -1;
}
/*
This function will take in the haystack (a string) and the needle (a character) as parameters. 
It will use a for loop to iterate through each character in the haystack, 
and within the loop it will check if the current character is equal to the needle. 
If it is, the function will return the current index (i) of the loop. 
If the loop completes and the needle is not found in the haystack, the function will return -1.
*/
