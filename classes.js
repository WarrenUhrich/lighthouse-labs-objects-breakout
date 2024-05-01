class Dog {
    constructor(name, breed, colour) {
        this.name = name;
        this.breed = breed;
        this.colour = colour;
    }

    bark() {
        console.log(`${this.name} barks! 🔊 🐕`);
    }
}

const quorra = new Dog('Quorra', 'Akita/Cross', 'Black, Tan, and White');
quorra.speyed = true;

const snoopy = new Dog('Snoopy', 'Beagel', 'White and Black');

quorra.bark();
snoopy.bark();
