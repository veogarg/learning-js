

const person1 = {
    firstName: "Aditya",
    lastName: "Singh",
    // printName: function(city, state){
    //     console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
    // }
}

const person2 = {
    firstName: "Vikas",
    lastName: "Garg"
}

function printName(city, state){
    console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
}

// person1.printName('Noida', "UP");

/* ============================================== */
// Function borrowing

/* using call */
printName.call(person1, "Noida", "UP");
printName.call(person2, "Panipat", "HR");

/* using apply */
printName.apply(person1, ["Noida", "UP"]);
printName.apply(person2, ["Panipat", "HR"]);

/* bind */
const printMyName = printName.bind(person1);
printMyName("Noida", "UP")
printName.bind(person2)("Panipat", "HR")

/* ============================================== */
