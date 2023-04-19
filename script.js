//01. Calculate the Uber Price.


class uber{
    constructor(pickup, drop, time, distance){
        this.pickup = pickup;
        this.drop = drop;
        this.time = time;
        this.distance = distance;
    }
    totalFare(){


    let fare =  this.distance*10;


    if(this.distance < 4){
        console.log(`Distance between ${this.pickup} & ${this.drop} is less than 4 kms.`);
    }
    else{


        if(0 <= this.time && this.time < 17){
            console.log(`Total fare between ${this.pickup} & ${this.drop}  is : Rs. ${fare}/-`);
        }
        else if(23>= this.time && this.time >=17){
            console.log(`Due to heavy traffic than usual, total Fare between ${this.pickup} & ${this.drop}  is : Rs. ${fare*1.5}/-`);
        }
        else{
            console.log("Invalid time format")
        }
    }
    }
}
let trip = new uber("Station", "Airport", 19, 25)
console.log(trip.totalFare());


//02. Create a class with the name Person and hold details in it.


class person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }      
}
let person1 = new person("Sushank", 27,"male" );
let person2 = new person("Sanjay", 55,"male");


console.log(person1, person2);
