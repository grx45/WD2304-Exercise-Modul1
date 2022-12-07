//--------------------------------------- problem 1--------
let celcius = 32;
let fahrenheit = (celcius * 1.8) + 32;
console.log (fahrenheit)
//--------------------------------------- problem 2--------
let number = 1

if(number % 2 == 0)
{
    console.log("number is even")
}
else{
    console.log("number is odd")
}
//--------------------------------------- problem 3--------
let number1 = 4;





//--------------------------------------- problem 4--------
let x = 0;

for(let y = 0; y<= 5;y++)
{
    x = x + y;
}
console.log(`result is = ${x}`)
//--------------------------------------- problem 5--------
let value = 5;
let final = value; // set value sama

while(value > 1)
{
    value--; // decrement dlu value
    final = value * final; // first case value = 4 * final =5 biar 20
}
console.log(final)

//---------------------------------problem 6-------------------
var num1 = 0; // 1st number slalu 0
var num2 = 1; // 2nd number slalu 1
var num3;
let given_sequence = 9;
let str = ""; // biar awalnya string kosong

for (let i = 3; i <= given_sequence; i++) // krena 3rd number in fibo sequence
{                                          // trus yg di diplay lngusng variable num3
    num3 = num1 + num2
    //console.log(num3);
    
    if (i != 3)
    {
        str = str + ","
    }

    str  =  str + num3.toString();
    num1 = num2;
    num2 = num3;
}
console.log(str)