//array declare
let arr = [];
let array = [1, 2, 3, 4, 5];
console.log(array);
console.log(array.length);
let i = 0;
while (i < array.length) {
  console.log("elem at idx ", i, " is ", array[i]);
  i++;
}

//push for add last
// unshift for adding at front
array.push("last value");
array.unshift("first value");
console.log(":~```````");
console.log(array);
// remove first shift
//remove last pop
array.shift();
array.pop;
console.log(":~````````");
console.log(array);
// start idx, ending idx
let partOfAnArray = array.slice(2);
console.log(partOfAnArray);
console.log(array);
array.splice(2, 3);
console.log(array);
//indexof
//contain
