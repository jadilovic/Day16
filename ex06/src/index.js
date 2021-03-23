function firstName(firstName){
    return firstName.toUpperCase();
}

function lastName(lastName){
    return lastName.toLowerCase();
}

console.log(firstName("Aki"));
console.log(lastName("Baki"));

exports.firstName = firstName;
exports.lastName = lastName;
