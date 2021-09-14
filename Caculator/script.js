var ans;
var oper = prompt("Input Operation \n 1. addition 2. substraction\n 3.multiplication 4. Division");
var x=parseFloat (prompt("Input 1st digit"));
var y=parseFloat (prompt("Input 2nd digit"));

switch(oper){
case'1':
    ans = x + y;
    alert("The Answer is : "+ ans);
    break;
case'2':
    ans = x - y;
    alert("The Answer is : "+ ans);
    break;
case'3':
    ans = x * y;
    alert("The Answer is : "+ ans);
    break;
case'4':
    ans = x / y;
    alert("The Answer is : "+ ans);
    break;

}
