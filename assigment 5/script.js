// ! 1. What is a function?
// ფუნქცია არის კოდის ბლოკი, რომელიც შეგვიძლია გამოვიყენოთ მრავალჯერ
//! 2. What is a function call?
// ფუნქციის გამოძახება
//! 3. What is a code block, and how does it relate to a function?
// კოდის ბლოკი არის ფიგურულ ფრჩხილებში მოქცეული კოდი რომელიც მხოლოდ ბლოკში მუშაობს
//! 4. Create a function that takes a string as an argument and greets the user. For example, if the function is called with "John," the function should return "Hello, John!"

function greet(name) {
  return `Hello ${name}!`;
}
console.log(greet('fernando'));

//! 5. Create a function that takes a string as an argument and returns a string with the argument value in reverse. For example, if the function is called with the input "hello," the function should return "olleh." (Use a loop, not a method that does this in one step.)

function reversething(rame) {
  let revese = '';
  for (let i = 0; i < rame.lenght; i++) {
    revese = rame[i] + revese;
  }
  return revese;
}
console.log(reversething`hello`);

//! 6. What is a default argument, and how does it work?
// ცარიელი არგუმენტი

//! 7. What is the scope and lifetime of a variable?
// სკოუპი არის ცვლადის მოქმედების არეალი ბლოკში ან მთლიან პროგრამაში.

//! 8. What is a return value?
// ფუნქცია აბრუნებს შედეგს.

//! 9. What is the return value of a function that does not have a return statement?
// ფუნქციას როდესაც არ აქვს return ოპერატორი ავტომატურად აბრუნებს undenfind.

//! 10. Given the following function, find mistakes in the code and explain what the function is supposed to do:
function foo(x) {
  return x * 2; // ვამატებთ reTurn ოპერატორს. წინააღმდეგ შემთხვევაში იქნებოდა undenfind
}

let x = 7;
x = foo(x);
console.log(x);

//! 11. Given the following code, find and correct the mistake in the code:
// function bar(x = 8) {
//   x += 1;
// }

// function foo() {
//   bar();
//   x *= 2;
// }

// let x = 7;
// foo(x);
// console.log(x); // x should change!
//?????????????????????????????????????

//! 12. Given the following function, what is the return value of the function call foo(2)? Explain your answer.
// function foo(x) {
//   if (x > 5) {
//     return x;
//   } else {
//     return x + foo(x + 1);
//   }
// }
// //?????????????????????????????

//! 13. Create a function that takes an array of numbers as an argument and returns the sum of the odd numbers in the array. (Use a loop, not a method that does this in one step.)

function sumOddNums(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumOddNums([50, 40, 33, 21]));

//! Create a function that takes a string as an argument and returns a boolean, true if string is a palindrome else false. A palindrome is a word that reads the same backward as forward. For example, if the function is called with "hello" it should return false, if the function receives "elle" it should return true, because elle backwards is also elle.

function isPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
console.log(isPalindrome('ola'));
console.log(isPalindrome('hallo'));
console.log(isPalindrome('elle'));
