//1. display in the console the numbers from 1 to 20
console.log("Numbers from 1 to 20:");
var input = 1;
while (input <= 20){
    console.log(input++);
}

//2. display in the console the odd numbers from 1 to 20
console.log("Odd numbers from 1 to 20:");
for (var i = 1; i <=20; i += 2) {
    console.log(i);
}

//3. compute the sum of the elements of an array and display it in the console
console.log("Sum of the elements of an array:");

var array = [5, 35, 10, 75, 85];
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
}
console.log(sum);

// 4. compute the maximum of the elements of an array and display it in the console 
console.log("Maximum of the elements of an array:");

var array = [5, 35, 10, 75, 85];

function maxOfArr(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

let myArr = [5, 35, 10, 75, 85];
console.log(maxOfArr(myArr));

// 5. compute how many times a certain element appears in an array

console.log("compute how many times a certain element appears in an array:");

var arr1 = [8, 1, 3, 5, 6, 7, 9, 8, 8, 8];
var counts = {};

for (var i = 0; i < arr1.length; i++) {
    var num = arr1[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.log("8 appears " + counts[8] + " times");