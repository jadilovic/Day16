// only change code below this line
class Microsoft {
    constructor(name){
        this._name = name;
    }

    set name(newName){
        this._name = newName;
    }

    get name(){
        return this._name;
    }

    occupation(){
        return `${this._name} is a philanthropist!`;
    }
}

class Facebook extends Microsoft {
    constructor(name, age){
        super(name);
        this._age = age;
    }

    studentAge(){
        return `${this._name} is ${this._age}`;
    }
}

// Only change code above this line

let henry = new Microsoft("William Henry Gates III"); // Change this line
let boby = new Microsoft("Boby Dog"); // Change this line
console.log(henry.occupation());
console.log(boby.occupation());

let elliot = new Facebook("Mark Elliot Zuckerberg", 23); // Change this line
console.log(elliot.occupation());
console.log(elliot.studentAge());

module.exports = {
    Microsoft,
    Facebook
}