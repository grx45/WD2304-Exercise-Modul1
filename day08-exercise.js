class Employee {
    constructor(_name,){
        this.name =_name;
    }
}

class FullTime extends Employee{
    constructor(_name,_time){
        // memanggil constructor dari class induk ('Employee') untuk akses property class induk
        super(_name);
        this.time = _time;
        this.Salary = 100000;
        this.gaji = this.calculateSalary() // set kondisi awal salary full time employee
    }

// method calculate salary buat menghitung gaji perorang
    calculateSalary(){
        let overtime = (this.time - 6) //cara cari overtime
        let totalSalary = 0; // initialize gaji awal

        if (overtime < 1){
            // total gaji  = gaji * jam kerja orang, biar klo orangnya kerja dibawah 6 jam maka tetap dibayar segitu
            totalSalary += this.Salary * this.time;
        }
        else{
             // klo ada overtime maka gaji full * 6 (krena 6 jam dianggap full working hour) + gaji lembur * jam lembur
            totalSalary += this.Salary * (6) + 75000 * overtime;
        }
        return totalSalary
    }

    // method buat hitung jam kerja orangnya
    addWorkHour(a,b){
        let jamMasuk = a.split(':')[0]; // split 13:00 dengan ":" dan ambil index[0] yaitu 13
        let jamKeluar = b.split(':')[0];

        let jamKerja = parseInt(jamKeluar) - parseInt(jamMasuk);
        this.time = jamKerja;
    }
}

class PartTime extends Employee{
    constructor(_name,_time){
        // memanggil constructor dari class induk ('Employee') untuk akses property class induk
        super(_name);
        this.time = _time; 
        this.Salary = 50000; // set kondisi awal salary part time employee
    }
    calculateSalary(){
        let overtime = (this.time - 6) //cara cari overtime
        let totalSalary = 0; // initialize gaji awal

        if (overtime < 1){
            // total gaji  = gaji * jam kerja orang, biar klo orangnya kerja dibawah 6 jam maka tetap dibayar segitu
            totalSalary += this.Salary * this.time;
        }
        else{
             // klo ada overtime maka gaji full * 6 (krena 6 jam dianggap full working hour) + gaji lembur * jam lembur
            totalSalary += this.Salary * (6) + 75000 * overtime;
        }
        return totalSalary
    }
    

     // method buat hitung jam kerja orangnya
        addWorkHour(a,b){
        let jamMasuk = a.split(':')[0]; // split 13:00 dengan ":" dan ambil index[0] yaitu 13
        let jamKeluar = b.split(':')[0];

        let jamKerja = parseInt(jamKeluar) - parseInt(jamMasuk);
        this.time = jamKerja;
        }
}

let attendanceFT = new FullTime("Bob");
let attendancePT = new PartTime("Albert");
//console.log(attendanceFT)
attendanceFT.addWorkHour("06:00", "13:00");
attendancePT.addWorkHour("12:00", "16:00");
console.log(attendanceFT);
console.log(attendancePT);
console.log(attendanceFT.calculateSalary().toLocaleString('id',{style:"currency", currency:"IDR"}));
console.log(attendancePT.calculateSalary().toLocaleString('id',{style:"currency", currency:"IDR"}));


// Problem 2==============================Shooting game==========================================================

class Player{
    constructor(_name){
        this.nama = _name
         this.health = 100;
         this.power = 10;
    }
// function to subtract player health by other player power. 
    hit(power){
        this.health -= power; // klo diminus this.power maka health slalu di minus 10 biarpun player dapat bonus power
    }
    // tidak ada return value gra gra function ini akan dicall di function lain

    // function buat player memakai bonus yg mreka dapat
    useItem(item){
        // Item dalam kasus ini me-refer ke object yg dibuat oleh getRandomItem
        this.health += item.health;
        this.power += item.power;
    }
    // tidak ada return value gra gra function ini akan dicall di function lain
    showStatus(){
        console.log(`Player ${this.nama} (Health => ${this.health}, Power => ${this.power})`);
    }
 }


class ShootingGame{
    constructor(_player1, _player2){
        this.Player1 = _player1;
        this.Player2 = _player2;
    }

    getRandomItem(){
        let health = 0
        let power = 0

        let x = ((Math.random() * 10) + 1);
       
        if (x >= 5)
        {
            health = 10;
        }
        else{
            power = 10;
        }

        return {
            health: health,
            power: power
        }
    }

    // Arrow function ==> start = () =>{}
    start(){
        while(this.Player1.health > 0 || this.Player2.health > 0 ) {
        //Before shooting------------------------------------------------------

        // player 1  & 2 uses random item
        this.Player1.useItem(this.getRandomItem());
        this.Player2.useItem(this.getRandomItem());
       
        
        // show player1 & 2 status
        this.Player1.showStatus();
        this.Player2.showStatus();

        //After shooting---------------------------------------------------------------------------

        // reduce player 1 hp by player 2 power dan sebaliknya
        this.Player1.hit(this.Player2.power);
        this.Player2.hit(this.Player1.power);

        //return winner jika health salah satu player mencapai 0

        if (this.Player2.health <= 0){
            return `Winner ${this.Player1.nama}`
        }
        if (this.Player1.health <= 0){
            return `Winner ${this.Player2.nama}`
        }
        if (this.Player1.health <= 0 && this.Player2.health <= 0){
            return "Draw"
        }
    }
    }
}

let playerA = new Player("Alex");
let playerB = new Player("Bob");
let shooting = new ShootingGame(playerA, playerB);
console.log(shooting.start())






