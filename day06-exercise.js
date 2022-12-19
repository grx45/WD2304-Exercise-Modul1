// Exercise 1
class Student{
    constructor(_name, _email, _date, _score){
        this.name = _name;
        this.email = _email;
        this.date = _date;
        this.score = _score;
        //contoh klo mau ngecall getAge
        this.age = this.getAge() // line ini tidak perlu hanya buat contoh
    }
    getAge = function(){
        // getAge = () => {
             let yearOfBirth = parseInt(this.date.split('-')[0]); // parse int biar tahun lahir yg dapet diubah dri string jdi integer
             console.log(yearOfBirth); // hrus di call dlu function getAge klo tidak gk muncul output sini.
             let date = new Date();
             return date.getFullYear() - yearOfBirth;
    }
}

let dbStudent = [
    new Student("Edo","edo@mail.com", "1997-04-25", 85),
    new Student("Andrew","and@mail.com", "1998-11-12", 65),
    new Student("Zafran","zaf@mail.com", "1992-02-01", 80),
    new Student("Budi","bud@mail.com", "1996-11-11", 75)
];
/*
let sorteddbStudent = dbStudent.sort(
    (a,b) => (a.score < b.score) ? 1 : (a.score > b.score) ? -1 : 0); // to sort the students from the highest score to the lowest score

    console.log(sorteddbStudent)
    */
let calculateStudent = (arr) =>{
    let totalScore = 0;
    let totalAge = 0;
    let sortedScores = [...arr.sort((a,b) => a.score - b.score)]; // sorted from lowest score to highest score, ascending order
    let sortedAges = [...arr.sort((a,b) => a.age - b.age)]; // sorted from lowest age to highest age, ascending order
    // klo mau descending order b-a
    console.log(sortedScores);
    console.log(sortedAges);

    for (let i = 0; i < arr.length; i++)
    {
        totalScore += arr[i].score;
        totalAge += arr[i].age;
    }
    return {
        Score: {
            highest: sortedScores[arr.length - 1],
            lowest: sortedScores[arr.length[0]],
            average: totalScore / arr.length
        },
        age: {
            highest: sortedAges[arr.length - 1],
            lowest: sortedAges[arr.length[0]],
            average: totalAge / arr.length
        }
    }
}
console.log(calculateStudent(dbStudent))

//===================================Problem 2===================================

class Product {
    constructor(_name, _price) {
        this.name = _name;
        this.price = _price;
    }
}

let dbProduct = [
    new Product("Apel", 5000),
    new Product("Lemon", 10000)
]

class Transaction {
    constructor() {
        this.cart = [];
        this.total = 0; // variable to save harga smua barang yg ada dlm keranjang
    }

    addToCart = (product = null, qty = 1) => {
        let amount = 0;
        this.cart.push({
            product: { ...product, qty },
            subTotal: qty * product?.price //class?.property buat mengecheck apakah ada property itu dlam class. tdak prlu tpi hanya buat aman
        })
        this.cart.forEach((val) => amount += val.subTotal); // val itu callback function
        this.total = amount;
    }

    show = () => {
        return 'Your total trasaction Rp.' + this.total.toLocaleString('id');
    }

    checkout = () => {
        let print = '';
        this.cart.forEach((val, indexnumber) => { // val disini kaya this.cart[index]
            print += `${indexnumber + 1}. ${val.product.name}, ${val.product.price.toLocaleString('id', { style: "currency", currency: "IDR" })}, Qty: ${val.product.qty}, ${val.subTotal.toLocaleString('id', { style: "currency", currency: "IDR" })}\n`;
        })
        print += `Total payment : ${this.total.toLocaleString('id', { style: "currency", currency: "IDR" })}`

        this.cart = []; // after doing transaction empty the cart
        return print;
    }
}
let transaction = new Transaction(); //klo class yg banyak methodnya lebih baik disimpan ke variable bru dlu
console.log(dbProduct);
transaction.addToCart(dbProduct[0], 3);
transaction.addToCart(dbProduct[1], 3);
console.log(transaction.cart);
console.log(transaction.show());
// transaction.addToCart(dbProduct[1], 1);
console.log(transaction.checkout());





