function my_average_mark(str) {
if (str.length == 0){
    return 0,0;
}
let sum = 0;
for (i = 0; i < str.length; i++){
    sum = sum + str[i]["integer"];
}
return (sum / str.length).toFixed(1);
};
/*function my_average_mark(str): This line declares a function called my_average_mark which takes in a single argument, str.
if (str.length == 0): This line checks if the length of the str argument is equal to 0. If it is, the code block within the curly braces will execute.
return 0,0;: If the length of str is 0, this line will return the values 0 and 0.
let sum = 0;: This line declares a variable sum and initializes it to 0.
for (i = 0; i < str.length; i++): This line starts a for loop that will iterate for as many times as the length of the str argument. The variable i is initialized to 0 and will be incremented by 1 with each iteration.
sum = sum + str[i]["integer"];: This line adds the value of the "integer" key of the ith element of the str array to the current value of the sum variable.
return (sum / str.length).toFixed(1);: This line divides the value of sum by the length of the str argument, then rounds the result to 1 decimal place and returns it.
*/
