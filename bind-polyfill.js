const person1 = {
    firstName: "Vikas",
    lastName: "Garg"
}

const person2 = {
    firstName: "Aditya",
    lastName: "Singh"
}

function printName(city, state){
    console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
}

const printMyName = printName.bind(person1);
console.log("using bind");
printMyName("Noida", "UP");

// Polyfill for bind
Function.prototype.mybind = function(obj, ...args) {
    const _this = this;
    return function(...newargs){
        _this.apply(obj, [...args, ...newargs]);
    }
}

const printVikas = printName.mybind(person1, "Noida");
console.log("using mybind");
printVikas("UP");

const printAditya = printName.mybind(person2, "Noida");
console.log("using mybind");
printAditya("UP");
