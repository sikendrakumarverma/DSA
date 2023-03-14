//Object Oriented Programming 

// let object1 = {
    
//         name: "ObjName1",
//         date: "2nd Jan",
        
//         introduce:()=> {
//             return "introduce yourself"
//         }
// }
// object1.name = newName;
// object1.introduce();

// let object2 = {
    
//         #name: "ObjName1",
//         date: "2nd Jan",
        
//         introduce:()=> {
//             return "introduce yourself"
//         }
// }


class Vehicle {
    
    #company;
    
    constructor(name, companyName, type){
        this.name = name;
        this.company = companyName;
        this.type = type;
    }
    
    run() {
        console.log( `${this.name} is running`);
    }
    
    refillPetrol() {
        console.log(`${this.name} is refilling petrol `);
    }

    
    getName(){
           console.log(`${this.name}`);
    }
    

    setName(newName){
        this.name = newName
    }
}

let myVehicle = new Vehicle("VehicleName" , "XYZ" , "Big");
console.log(myVehicle)
myVehicle.name = "ABCD";
console.log(myVehicle)
// myVehicle.#company = "PQRS";
// console.log(myVehicle)

let car1 = new Vehicle("Nexon" ,"Tata");
console.log(car1)
car1.run()

let car2 = new Vehicle("Safari", "Tata", "SUV");
console.log(car2)
car2.setName("Punch")
console.log(car2)

//Inheritance
class Bike extends Vehicle{
constructor(name, companyName, type){
        super(name, companyName, type);
        this.backGear = false;
        this.kickStart = true;
}
    
isHelmetRequired () {
    
    return false;
}
}


class Truck extends Vehicle{

constructor(name, companyName, type, ){
        super(name, companyName);
        this.backGear = true;
        this.kickStart = false;
}
    
transportGoods(weight){
    return `this truck transports goods of ${weight} kg`
}

transportGoods(weight,from,to){
    return `this truck transports goods of ${weight} kg`
}

transportGoods(weight,from,to,date){
    return `this truck transports goods of ${weight} kg`
}

run(){
    console.log(`this is a method overriding example where my truck with name ${this.name} is running`);
}
}

class Car extends Vehicle{
    
    travel(){
        console.log("travelling via car");
    }

}

let myTruck = new Truck("ACE", "Tata", "Heavy");
console.log(myTruck);
console.log(myTruck.transportGoods(50, "delhi", "mumbai", "2ndJan"));
myTruck.run();
myTruck.name = "New NAme"
console.log(myTruck);
