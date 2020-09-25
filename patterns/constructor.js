class Car {
    constructor(doors,engine,color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

}

class Suv extends Car {
    constructor(doors, engine, color) {
       super(doors, engine, color);
       this.headlights = 4;
    }
}

const honda = new Car(4, 'V6', 'blue');
console.log(honda);

const hummer = new Suv(4,'V8', 'white');
console.log(hummer);
