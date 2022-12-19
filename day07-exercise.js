// Problem 1 - check if an object is equal to another
const car = 
{
    model: "BMW",
    brand: "M135"
}
const car2 =
{
    brand: "ferrari",
    model: "dsdsds",
}
console.log(car["brand"])
const compare = function(a,b)
{
    const keys_car = Object.keys(car).sort().toString(); //better ada sortnya biar klo property di awal tidak urut di sort dlu biar tetap bisa di detect
    console.log(keys_car)
    const keys_car2 = Object.keys(car2).sort().toString();
    console.log(keys_car2)
    if (keys_car == keys_car2)
    {
    return true
    }
else{
    return false
    }
}
console.log(compare(car,car2))

// Problem 2 - getting intersection of 2 objects
const object1 =
{a: 1,
b: 2,
c: 3,
d: 4
}
const object2 = 
{a: 1,
c: 3,
d: 4}
console.log(object2.c)

//output = {a, c}

/*
    check key di object1 dan di store di variable baru
    pke .keys maka variable brunya isinya array key object1
    compare apakah key yg di store di variable bru ada di object 2

*/

const Intersection = function(a,b) // function buat membandingkan keys dalam 2 object dan munculin yg match dalm satu array
{
    let output = new Object(); // initialize new object
    let keys1 = Object.keys(a); // ambil key dalam object1, simpan dalam keys1
    console.log(keys1)
    // function filter bisa diganti for...in
    let keysResult = keys1.filter(checkKeys); // hasil filter simpan dalam  variable result
    
    function checkKeys(keys){
        return b[keys] !== undefined; // filter untuk mencari apakah konten keys1 ada di dalam object2
                                    // jika variable keys1 juga present(tidak undefined) di object2 maka direturn ke dalam result
                                    // jika keys1 tidak ada(undefined) di object2 maka akan dikeluarkan
                                    
        // object property dalam bntuk string maka hrus pake []
        // bukan b.keys
    }
    console.log(keysResult)

    for (let i = 0; i < keysResult.length; i++)
    {   
        console.log(keysResult[i])

        if(object1[keysResult[i]] == object2[keysResult[i]])// bandingin setiap property object 1 dan object 2, jika sama maka lakukan block program dibawah
        {                                               
        output[keysResult[i]] = a[keysResult[i]] // property object1 dimasukan ke dalam object kosong dengan nama output.
        }
    }
    console.log(output)
    return output;
}
console.log(Intersection(object1,object2))

// cara lain dibawah

let obj1 = {
    a: 1,
    c: 3,
    d: 4
}

let obj2 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

const intersection = function (ob1, ob2) {
    var newObj = {};
    
    for (let i in ob1) {
        console.log(i)
        console.log(obj2[i])

        if (ob1[i] == ob2[i]) {
            newObj[i] = ob1[i];
        }
        console.log(newObj);
    }
    return newObj;
}
console.log(intersection(obj1, obj2));

// Problem 3--- merge two array of objects into one and remove duplicate data
let dB1 = [
    { name: "Student 1", 
    email : "student1@mail.com"},
    { name: "Student 2", 
    email : 'student2@mail.com'}
]
let dB2 = [
    { name: "Student 1", 
    email : "student1@mail.com"},
    { name: "Student 3", 
    email : 'student3@mail.com'}
]

/*output maunya: { name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 2’, email : ‘student2@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
*/


//console.log(Object.values(dB1[0]))

//let dB3 = [...dB1,...dB2]
//console.log(dB3)

const mergeAndDelete = function(a,b)
{
    let dB3 = [...a,...b]; // gabungin array
    console.log(dB3[1])
    let output  = []; //bkin array kosong buat simpan hasil akhir

    for (let i = 0; i < dB3.length; i++)
    {
        let newArr = output.filter((val) =>{
            return val.name == dB3[i].name //
        })
        console.log(newArr)
        console.log(output)

        if(newArr.length == 0)
        {
            output.push(dB3[i])
        }
        console.log(output);
    }
   return output;
}
console.log(mergeAndDelete(dB1,dB2))
   
/*
    for (let i = 0; i < dB3.length; i++)
    {
        if (output.length == 0)
        {
            output.push(dB3[i]);
        }

        output = dB3.filter(filtering)

        function filtering(value,index,arr)
        {
            return arr.indexOf(value.name) === index;
        }
       
    }
    */

// Problem 4================================================
let input = [{name: "David", age: 20},
    {name: "bob", age: 12}];
// expected output: [{David: "name"; 20:"Age"}]

const switch1 = function (array)
{
    let output = [] // initialize object baru
    // initialize array baru
    
    for(let i = 0; i < input.length; i++) // loop ini buat iterate smua object dalam array input
    {
        let temp = {}; // setiap kali selesai loop generate object kosong baru

    for(var keys in array[i]) // loop through object dalam input dan disimpan propertynya dalam keys
    {
        keys
        console.log(array[i][keys])
        let newProp = array[i][keys]
        temp[newProp] = keys // value dalam object temp kita ganti dengan yg di dalam variable keys
        console.log(temp)
    }
    output.push(temp); // object temp di push dalam array kosong output
    }
     
     return(output)
}
console.log(switch1(input));

// Problem 5 factorial number using recursion

const factorial = function(x)
{
    
    if(x != 0)
    {
        x = x * factorial(x-1);
    }

    // gk bisa pake while krena saat x diubah dri 0 jadi 1 msuk while loop lgi, brubah jadi 0 lgi, diubah jdi 1 lgi ,msuk loop lgi, dan seterusnya
    //while (x != 0)
   // {
   //     x = x * factorial(x-1);
   // }

    if (x == 0)
    {
        return 1;
    }
    return x
}

console.log(factorial(5))
