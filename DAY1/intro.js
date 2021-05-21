// how to print
console.log("hello world");

// declare a variable
// undefined is the default value
//JS only tells you that it is a variable
let a;
a = 10;
console.log(a);
a = 10.1;
a = "hello i am a string";
a = "hello i am also a string";
a = null;
a = true;
// variable types: Primitive types: number, string, boolean, null

//JS loops is similar -> Java, c++,c
let number = 10;
for (let i = 1; i <= number; i++) {
  console.log("Number //is", i);
}

let number = 23;
let flag = true;
for (let div = 2; div < number; div++) {
  if (number % div == 0) {
    flag = false;
    break;
  }
}
if (flag == true) {
  console.log(number, "number is prime");
} else {
  console.log(number, "is not prime");
}
