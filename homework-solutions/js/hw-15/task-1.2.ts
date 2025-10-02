//1
interface IVehicle {
  getDetails(): string;
  start(): string;
}

abstract class Vehicle implements IVehicle {
    protected make: string;
    protected model: string;

    constructor( make: string, model: string) {
        this.make = make;
        this.model = model;
  }
  
    start(): string {
        return `The vehicle ${this.make} ${this.model} is starting.`;
  }
    abstract getDetails(): string;
}

class Car extends Vehicle {
    private year: number;
    constructor ( make: string, model: string, year: number ){
        super(make, model);
        this.year = year;
    }
    getDetails(): string {
        return `${this.make} ${this.model}, ${this.year}`;
    }
}

const testCar = new Car("Mazda", "Miata", 1994);
console.log(testCar.start());     
console.log(testCar.getDetails());