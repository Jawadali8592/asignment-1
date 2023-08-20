"use strict";
//write typescript prgrm that calculate 1-1000 even numbers.
var sum = 0;
var list = [];
for (let index = 1; index <= 100; index++) {
    if (index % 2 == 0) {
        sum = sum + index;
        list.push(index);
    }
}
console.log(sum, list);
