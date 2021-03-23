// Only change code below this line
class Person {

    constructor(){
    }

    static display(){
        const message = "Static method invoked from Person class";
        return message;
    }

    show(){
        console.log(Person.display());
    }
}
// Only change code above this line

var message = new Person();
message.show();
console.log(Person.display());
module.exports = Person;