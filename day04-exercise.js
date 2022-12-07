//======================================================Number 1===================================

const triangle = function(height)
{
    let result = "";
    let integer = 0; // variable to store current loop number
    for (let i = 0; i <= height; i++) //iterate until end of  triangle height
    {
        for(let j = 1; j <= i; j++ ) // iterate until number of current loop
        {
            integer++ // increments the loop number by 1
            if(integer > 9)
            {
                result += integer + " ";
            }
            else{
                result += "0" + integer + " ";
            }
        }
        result += "\n";
    }
    return result;
}
console.log(triangle(4));

//======================================================Number 2===================================
const buzz = function(n)
{
    let result = "";
    for (let i = 1; i <= n; i++)
    {
        
        if(i % 15 == false) // klo 3 dan 5 , condition pertama klo tidak value sudah ditimpa else lain.
        {
            result += "FizzBuzz";
        }
        else if(i % 3 == false) //klo 3
        {
            result+= "Fizz";
        }
        else if(i % 5 == false) //klo 5
        {
            result += "Buzz";
        }
        else{
            result += i;
        }
        result += "\n";
    }
    return result
}
console.log(buzz(31))

//=============================================Problem 3==========================================

const BMI = function (weight,Height)
{
    let text = "";
    let result = weight / (Height **2);
    if (result < 18.5)
    {
        return text = "less weight";
    }
    else if (result > 18.4  && result < 25)
    {
        return text ="ideal";
    }
    else if (result > 24.9  && result < 30)
    {
        return text ="overweight";
    }
    else if (result > 29.9  && result < 40)
    {
        return text ="very overweight";
    }
    else if (result >= 40)
    {
        return text ="obesity";
    }
}
console.log(BMI(76.8,1.72))

//=====================Problem 4======================
let numbers = [1,2,3,4,5,6,7,8];
let filtered = numbers.filter(filtering);

function filtering(n)
{
    return n % 2 == 0; // condition to return.
                       // if(number dalam array % 2 == 0), return the value
}
console.log(filtered);

 //========================Problem 5========================

 function stringToArray(str) {
    let arr = ['']; // initialize new empty array
    let j = 0; // initialize variable with zero value for first index in array

    for (let i = 0; i < str.length; i++) { // loop through sentence
        if (str.charAt(i) == " ") { // if the character at i pos --> space or " "
            j++; // increment j by 1 buat increment index array by 1
                // when i = 1; j = 1
            arr.push(''); // push '' into new empty array --> meaning start at new index
        } else {
            arr[j] += str.charAt(i); // at array position j insert the char at position i
        }                              
    }
    return arr;
}

const sentence = stringToArray("Hello World")
console.log(sentence)

const o = "i am";
console.log(o.charAt(2))