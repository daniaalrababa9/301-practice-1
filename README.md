# 301-practice-1
# 1- What library do we use in Node on the server side to allow us to create and run an HTTP server that obeys the HTTP protocol?
express library
# 2- Explain this snippet of code from a server-side application (response.status(200).send('Hello World!');
this will send  'Hello World!' as a response when it response successfully
# 3- Write a function that takes an array of numbers as an argument and outputs the square of each number in that array.
let number =[1,2,3];
function squareOfNumbers(num){
  let out= num.map(val=>{
  return val*val ;
});
console.log(out);}
squareOfNumbers(number);