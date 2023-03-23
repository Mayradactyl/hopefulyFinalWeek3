// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

// 1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// •	Do not use numbers to reference the last element, find it programmatically, 
// •	ages[7] – ages[0] is not allowed!

// 1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// 1c.	Use a loop to iterate through the array and calculate the average age. 


var ages = [3, 9, 23, 64, 2, 8, 28, 93];
    console.log ("?1:",ages[ages.length-1] - ages[0])
    ages.push(13)
    console.log (ages[ages.length-1] - ages[0]);
    let sum = 0;
    for (i = 0; i < ages.length; i++) {
        sum = sum + ages[i];
    }
    console.log(sum / ages.length);

// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// 2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 

// 2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
    sum = 0; 
    for (i = 0; i < names.length; i++){
    sum = sum + names[i].length;
}
console.log(sum / names.length)

let con = names[0];
    for (i = 1; i < names.length; i++) {
        con = con.concat(" ", names[i]);

    }
console.log(con);


// 3.	How do you access the last element of any array?
// console.log("?3:",ages[ages.length-1])



// 4.	How do you access the first element of any array?
// console.log("?4:",ages[0])

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

// For example:

// let names = ["Kelly", "Sam", "Kate"]; 	//starting with this array
// let nameLengths = [5, 3, 4]; 			//create this new array

var nameLengths = [];
    for (i = 0; i < nameLengths; i++) {
        nameLengths.push(names[i].length);

    }
    console.log(nameLengths);

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

sum = 0;
for (i = 0; i < nameLengths.length; i++) {
    sum = sum + nameLengths[i];
}
console.log(sum);

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function repeat(word, n){
    var repeatedWord = '';
    for (i = 0; i < n; i++){
        repeatedWord = repeatedWord + word;
    }
    return(repeatedWord);
}
console.log(repeat('"Hello"', 3));

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.

function fullName (firstName, lastName) {
    return (firstName + " " + lastName);
}
console.log(fullName("Ezekiel",  "Garcia"));

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function hundred (array) {
    sum = 0;
    for (i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    if (sum > 100) {
        return true;
    }
    else {
        return false;
    }
}
console.log(hundred(ages));

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

function average (array) {
    sum = 0; 
    for (i = 0; i < array.length; i++) {
        sum += array[i]; 

    }
    return(sum / array.length);
}
console.log(average(ages));

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function compareAverages (array1, array2) {
    sum = 0;
    for (i = 0; i < array1.length; i++){
        sum = sum + array1[i];
    }
    var avg1 = (sum / array1.length);
    sum = 0 
    for (i = 0; i < array2.length; i++) {
        sum = sum + array2[i];
    }
    var avg2 = (sum / array2.length);
    if (avg1 > avg2) {
        return true;
    }
    else {
        return false;
    }
}
console.log(compareAverages(nameLengths, ages));

// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPockets){
    if ((isHotOutside) && (moneyInPockets > 10.50)) {
        return "Will buy drink!";
    }
    else {
        return "Won't buy a drink!";
    }
}
console.log(willBuyDrink(true, 20));

// 13.	Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.

function getNailsDone (favoriteColors, cashInHand) {
    if ((facoriteColors = "pink" || "red" || "black") && (cashInHand < 30)) {
        return "Manicure";
    }
    else {
        return "No Manicure";
    }
}
console.log(getNailsDone("red", 25));





