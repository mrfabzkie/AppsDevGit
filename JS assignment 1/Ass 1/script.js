var limit = 1;
var arr = [];
let num = 0;
var checker = 0;


do{
    arr[num] = parseInt(prompt("Enter Numeber"));
    limit = parseInt(prompt("1. Add \n 2. Stop"));
    num++;
}while (limit != 2); 

const detect = (z) => {
var x;
var y;

x = z % 10;
y = z / 10;

if (x == 5){
checker++;
} else if (y == 5){
    checker++;
    }
}; 

arr.forEach(detect);

if (checker > 0){
    alert("!!!!!!");

}else {
    alert("therse is no 5 in the array");
}

console.log(arr);