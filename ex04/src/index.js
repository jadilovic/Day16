// Only change code below this line
class Pets {
    constructor(name, legs){
        this._name = name;
        this._legs = legs;
    }

    walk(){
        const numberOfLegs = `${this._name} is walking on ${this._legs} legs`;
        return numberOfLegs;
    }
}

class Dog extends Pets {
    constructor(name, legs){
        super(name, legs)
    }

    bark(){
        const dogSay = `${this._name} says WUF-WUF`;
        return dogSay;
    }
}

// Only change code above this line

let dog = new Dog("Pujdo", 4); // Change this line
console.log(dog.walk());
console.log(dog.bark());

let maxDog = new Dog("Max", 6); // Change this line
console.log(maxDog.walk());
console.log(maxDog.bark());

module.exports = {
    Pets,
    Dog
}