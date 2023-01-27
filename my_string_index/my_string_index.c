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
