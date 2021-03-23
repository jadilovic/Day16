class Person {
    constructor(name, email, age){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getPerson(){
        const personInfo = `Name: ${this.name}, email: ${this.email}, age: ${this.age}`;
        return personInfo;
    }
}

const testUser = new Person("Aki", "Yahoo", 42);
console.log(testUser.getPerson());

module.exports = Person;