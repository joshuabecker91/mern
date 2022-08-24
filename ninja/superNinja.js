
class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log("Stats for: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Strength: " + this.strength);
    }

    drinkSake(){
        this.health = this.health + 10;
    }

}


const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();


class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        console.log("Speaking wisdom");
        this.drinkSake();
        console.log("drinking this will increase your health");
    }
}

// console.log(ninja2);
console.log("\n  Bob");
const ninja2 = new Ninja("Bob", 10);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();

// console.log(ninja3);
console.log("\n Billy");
const ninja3 = new Ninja("Billy", 20, 5, 7);
ninja3.sayName();
ninja3.showStats();
ninja3.drinkSake();

// console.log(sensei1);
console.log("\n Sensei Billy");
const sensei1 = new Sensei("Sensei Billy");
sensei1.showStats();
sensei1.speakWisdom();