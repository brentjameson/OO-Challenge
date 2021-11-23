class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return 'Beep';
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

let vehicle1 = new Vehicle('Chevy', 'Traverse', 2012);

class Car extends Vehicle {
    constructor(make, model,year) {
        super (make,model,year);
    }
    numWheels(){
        return 4
    }
}

let car1 = new Car('Honda', 'Accord', 2016);

class Motorcyle extends Vehicle {
    constructor(make, model, year) {
        super(make,model,year)
    }
    numWheels(){
        return 2
    }
    revEngine(){
        return 'VROOM'
    }
}
let moto1 = new Motorcyle('Harley', 'street bike', 2021)

class Garage {
    constructor(capacity) {
        this.capacity = capacity
        this.vehicles = []
    }
    add(vehicle) {
        if(!(vehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!"
        }
        if (this.vehicles.length >= this.capacity) {
            throw new Error("Sorry we're full");
        }
        else {
        this.vehicles.push(vehicle);
        return "Vehicle added!";
        }
    }
}

let smallGarage = new Garage(2)