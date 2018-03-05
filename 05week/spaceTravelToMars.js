'use strict';

//comments below are rough code plan. forgot i had this project still out. 

let assert = require('assert');

//will probably have to make objects like jobTypes for name, job, specialSkill for crewMember, and then name, type, and ability for Ship class
//goal of the game: get ships to print out their mission statements.

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

class CrewMember {
  constructor(name, job, specialSkill, ship) {
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = ship;
  }
  enterShip(ship) {
    this.ship = ship;
    ship.crew.push(this);
  }
}

class Ship {
  constructor(name, type, ability, crew) {
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
  }
  missionStatement() {
    if (this.crew.length < 1) {
      return "Can't perform a mission yet.";
    } else {
      return this.ability;
    }
  }
}

//tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });
//crewMember will be a class, with 4 properties
//ship will be equal to null
//need function method in this class. will be the enterShip method, outside the constructor. will push crewMember name to empty crew array in the Ship, and set the Ship property in crewMember to the Ship that the crewMember is in.

    it('can enter a ship', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });
  //probably a method of crewMember class. we think.
  //method to push crewMember onto a particular Ship. this function will push the crew name into the crew array for each ship.

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
      //mav.crew is an array. crew is an array listing the crew members in each Ship. Each ship will have crew array, and you'll push crewMember to this array. and if you dont have the right number of people or right combination, it will say "can't perform mission"  and if it's right, you'll get a mission statement.
      //mav and hermes are instantiations of Ship
    });
    //ship will be a class, with 4 properties: name, type, ability, empty crew array, because going to have to oush crew into that later
    //method after constructor called missionStatement which will console.log the mission statement (which is the ship's ability property), but only if there's the right crew.
    //if crew member job matches ship type, console.log(this.ability) else console.log("can't run mission yet")

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      //crewMember1 and crewMember2 are instantiations of crewMember class
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      //mav and hermes are instantiations of the class ship
      //one correct person on each ship
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
      //would be a method inside of the Ship class
      //missionStatement is going to declare one of the ship's posisble abilities, and there are only two listed on here.
      //if you dont have enough or maybe the right crew members, it would spit out, "can't perform a mission yet"
      //mission statement is the goal of the game. it's what signals the player that they've gotten at least one array right.
    });
  });
}
