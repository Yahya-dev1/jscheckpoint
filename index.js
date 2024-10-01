// fuction to reverse a string
const reverseString = (inputString) => {
    let reversedString = "";
  for (i = inputString.length - 1; i >= 0; i--){
    reversedString += inputString[i]
  }
  return reversedString;
}
let string = reverseString("Abdullahi");
console.log(string);








//a function that counts the number of characters in a string.

const stringCount = (input_string) => {
    let counter = 0;
    for (i = 0; i < input_string.length; i++){
        counter += 1;
    }
    return counter;
}

let counted = stringCount("noor");

console.log(counted);






// a funttion to capitalize first letter of words in a sentence 

const capitalize = (sentence) => {
    return sentence     
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

let cap = capitalize('my name is yahya abdullahi');
console.log({ cap });











// Array Functions 


// a function to find max and min in a given Array 


let arr = [61, 40, 23, 50, 32, 53, 49, 46];

const mini = (arr) => {
    return Math.min(...arr);
}
const maxi = (arr) => {
    return Math.max(...arr);
};

let minimum = mini(arr);
let maximum = maxi(arr);
console.log({ minimum });
console.log({ maximum });

















//function to find factorial of given number
let num = +prompt("Enter a number to find the factorial");

function factorial(num) {
    let result = 1;

    for (let i = num; i > 0; i--){
        
        result *= i;
    }
    return result;
}

let fac = alert(factorial(2));
console.log({ fac });


