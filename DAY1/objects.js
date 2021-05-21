// object -> group of key : value pair
//key: value-> property
//key: function-> method
let cap = {
  name: "steve",
  lasttname: "rogers",
  address: {
    city: "manhatten",
    state: "new york",
  },
  age: 35,
  isAvenger: true,
  movies: ["first avenger", "winter", "world war"],
  sayHi: function () {
    console.log("cap say's Hi");
  },
};
//get
console.log(cap.name);
console.log(cap.age);
console.log(cap.movies[1]);
cap.sayHi();
//set //update
console.log("cap :", cap);
cap.age = 36;
cap.isAvenger = false;
cap.friends = ["tony", "bruce", "peter"];
console.log("``````````````````````````````````//`");
////delete
delete cap.address;
console.log("cap :", cap);
for (let key in cap) {
  console.log(key, " : ", cap[key]);
}
let propKey = "age";
console.log(cap.age);
console.log(cap[propKey]);
console.log(cap["age"]);
console.log(cap.xyz);
