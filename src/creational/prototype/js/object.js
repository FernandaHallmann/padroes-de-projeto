const personPrototype = {
    firstName: 'Luiz',
    lastName: 'Miranda',
    age: 30,

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'João';
anotherPerson.lastName = 'Silva';
anotherPerson.age = 20;

console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());