class Person{
    constructor(name='anonymous', age=0){
        this.name = name;
        this.age = age;
    }

    greeting(){
        return `Hello my name is ${this.name} and I am ${this.age} years old`;
    }
}

const user = new Person('hamzah',26);

class Traveler extends Person{
    constructor(name, age, location){
        super(name, age)
        this.location = location;
    }
}


const ham = new Traveler('hamzah',26,'Florida');

console.log(ham);