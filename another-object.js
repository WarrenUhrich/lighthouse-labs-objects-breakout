const dog = {
    name: 'Quorra',
    breed: 'Akita/Cross',
    colour: 'Black, Tan, and White',
    speyed: true,
    bark: function() {
        // console.log(`${dog.name} barks! 📣 🐕`);
        console.log(`${this.name} barks! 📣 🐕`);
    }
};

const anotherDog = {
    name: 'Snoopy',
    breed: 'Beagel',
    colour: 'White and Black',
    bark: function() {
        console.log(`${this.name} barks! 📣 🐕`);
    }
};

// console.log();

dog.bark();
anotherDog.bark();
