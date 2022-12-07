// problem 1 loop for multiplication table------------- DONE
let num = 11; // number from user
const multiplication =  10;
for (let x = 1; x <= multiplication; x++)
{
    console.log(`${num} 'x' ${x}`);
}

// Problem 2 -- word palindrome ------------------------------- Done
let given_string = "racecar"; // string from user
let length1 = given_string.length;
let n;

/*console.log(length1)
console.log(given_string[0])
*/

for (let cursor = 0; cursor < length1/2; cursor++) // length bagi 2 krena 
{
   if (given_string[cursor] == given_string[length1-cursor-1])
   {
        n = "palindrome"
   }
   else
   {
        n = "not palindrome"
    }
}

console.log(n)


// Problem 3 -- convert centi to kilometer ----- DONE
let centimeter = 10000;
const kilometer = centimeter / (10**5);
console.log(centimeter + " centimer is " + kilometer + " km")

//Problem 4 format number as currency
let money = 1000;
let change = money.toFixed(2).replace(".",",");
console.log("RP. " + change );

//-----------------OR------------------- Below is preferred method

const locale = money.toLocaleString("in-ID", {
    style: "currency",
    currency: "IDR",
});
console.log(locale);



// Problem 5 -- remove a given occurence in a string -------- DONE
let word = "Hello world";
let given = "ell";


if (word.includes(given))
{
    modified = word.replace(given, "");
    console.log(modified)
}
else{
    console.log("no match detected")
}

// Problem 6 -- capitalize first letter of each word in a string------------------
let str = "hello world rar";
let split = str.split(" "); // pake space jdi separator 
console.log(split);
console.log(split.length);

for (var i = 0; i < split.length; i++)
{
    split[i] = split[i][0].toUpperCase() + split[i].slice(1);
}
const res = split.join(", "); // tanpa ", " gabung jdi satu kata full nyambung
console.log(res);



//problem 7 -- reverse a string------------------ Done

let string = "race";
let word_length = string.length;
let reverse = ""

//console.log(word_length)
//console.log(string[3])

for (let cursor = 0; cursor < word_length; cursor++)
{
    reverse += string[word_length - 1 - cursor]; // + to concade each letter into one string
    // reverse = reverse + string[word_length - 1 - cursor];
}
console.log(reverse);
