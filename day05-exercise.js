//============================================================ Problem 1========================
// without sort
let Arr = [5,2,7,1];


function getLowHighAvgWithoutSort(array){ 
    let low = Math.min(...Arr);
    let High = Math.max(...Arr);
    let total = array.reduce(Total);

    function Total(total,num)
    {
        return total + num;
    }
    let Average = total / array.length;

    return `lowest number is ${low}, Highest number is ${High}, Average is ${Average}, total is ${total}`
}
console.log(getLowHighAvgWithoutSort(Arr))

// with sort
function getLowHighAvgWithSort(array)
{
    array.sort();
    let low = array[0];
    let High = array[array.length - 1];
    let total = array.reduce(Total);

    function Total(total,num)
    {
        return total + num;
    }
    let Average = total / array.length;


    return `number is ${low}, Highest number is ${High}, Average is ${Average}, total is ${total}`
}
console.log(getLowHighAvgWithSort(Arr));

//================================ Problem 2=========================
//input: ['i', 'love', "earth"]
//output: i,love and earth

let string = ['Hiu', 'Paus', 'Pari', 'Belut'];

function combine(array)
{
    /*
    let sentence = ""
    for(i = 0; i < array.length; i++)
    {
        if(array[i] == array[array.length - 1]){
            sentence += "and " + array[i]
        }
        else if(array[i] == array[array.length - 2]){
            sentence += array[i] + " "
        }
        else{
            sentence += array[i] + ", "
        }
    }
    return sentence
    */
   return array.slice(0,array.length - 1).join(", ") + ` and ${array[array.length-1]}`
}
console.log(combine(string))

//========================= Problem 4==================================
// expected output = [5,12,14]

let Array1 = [1,3,5,10];
let Array2 = [4,9,9];

function adding(Arr1, Arr2)
{
    let Array3 = [];
    let length; // sets var length to one of the parameter array length

    // determines which array length to use
    if (Arr1.length > Arr2.length)
    {
        length = Arr1.length-1
    }
    else{
        length = Arr2.length-1
    }

    for(let i = 0; i <= length; i++)
    {
        Array3[i] = (Arr1[i] || 0) + (Arr2[i] || 0)
        /*Array3[i] = Arr1[i] + Arr2[i];

        if (Arr1.length > Arr2.length)
        {
            Array3[length] = Arr1[Arr1.length-1]
        }
        else
        {
            Array3[length] = Arr2[Arr2.length-1]
        }
        */
    }
    return Array3
}
console.log(adding(Array1,Array2))

//====================================Problem 5================================
let provided =['jeruk','apel','anggur'];

function comparison(val,Arr)
{
    for (i = 0; i < Arr.length; i++)
    {
        if (val == provided[i])
        {
            return "angka sudah ada"
        }
    }
    provided.push(val)

    //provided[provided.length] = val

    return provided
}

console.log(comparison("persimon",provided))
