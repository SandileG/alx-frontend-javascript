import EVCar from './100-evcar.js';

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1); // Should print details of the EVCar

const ec2 = ec1.cloneCar();
console.log(ec2); // Should be an instance of Car, not EVCar
