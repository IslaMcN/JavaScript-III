/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
function GameObject(game) {
  this.createdAt = game.createdAt;
  this.name = game.name;
  this.dimensions = game.dimensions;

}


GameObject.prototype.destroy = function () {
  return `${this.name} was removed from game.`;
}
// prototype method that returns: `${this.name} was removed from the game.`



function CharacterStats(character) {
  GameObject.call(this, character);
  this.healthPoints = character.healthPoints;

}



// prototype method -> returns the string '<object name> took damage.'
// * should inherit destroy() from GameObject's prototype
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`
}

function Humanoid(human) {
  CharacterStats.call(this, human);
  this.team = human.team;
  this.weapons = human.weapons;
  this.language = human.language;

}
Humanoid.prototype = Object.create(CharacterStats.prototype)

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`
};



/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

function Villain(evil) {
  Humanoid.call(this, evil);
  this.attack = evil.attack;
  

}
Villain.prototype = Object.create(Humanoid.prototype)

Villain.prototype.speak = function () {
  return `I am ${this.name} and I will kill you!!`
};
function Hero(good){
  Humanoid.call(this,good);
  Villain.call(this,good);
  this.attack = good.attack;
  this.merit = good.merit;
}
Hero.prototype = Object.create(Humanoid.prototype)
Hero.prototype.Attack = function (character){
  if 
    (attack.evil > character.healthPoints){
    return "Defeat!";
  }
  else {
    return "Victory!"
  }

}

Hero.prototype.talk = function() {
  return "This ends here!"
}

const hunter = new Hero({
  createdAt: new Date(),
  attack: 20,
  dimensions: {
    length: 5,
    width: 10,
    height: 20,
  },
  healthPoints: 22,
  name: 'Ikelos',
  team: 'Fire Kingdom',
  weapons: [
    'Stave of Destruction',
    'Demonsbane Staff',
  ],
  language: 'Gelonian',
});

const titan = new Villain({
  createdAt: new Date(),
  attack: 10,
  dimensions: {
    length: 27,
    width: 32,
    height: 42,
  },
  healthPoints: 5,
  name: 'Saltor',
  team: 'Organ 2',
  weapons: [
    'Void Magic',
    'Sword of demons',
  ],
});

console.log(hunter.Attack);
console.log(titan.createdAt);
console.log(hunter.talk); 
console.log(titan.speak); 
console.log(hunter.attack); 
console.log(titan.team); // The Round Table
console.log(hunter.weapons); // Staff of Shamalama
console.log(titan.language); // Elvish
console.log(hunter.greet()); // Lilith offers a greeting in Elvish.
console.log(titan.takeDamage()); // Bruce took damage.
console.log(hunter.destroy()); // Sir Mustachio was removed from the game.
