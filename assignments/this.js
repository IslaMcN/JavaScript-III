/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This is on a global/window scope. 
* 2. It refers to the item to it's left when doing Implicit Binding.
* 3. Creates new bindings within a constructor function.
* 4. When call or apply are used it is being explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1
function Food(lunch) {
    console.log(this);
    return lunch;
  }
  Food("Lo-Mein");
// code example for Window Binding

// Principle 2
const dog = {
    greeting: 'bark',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Zelda');
// code example for Implicit Binding

// Principle 3
function angryMan(greeter) {
    this.greeting = 'Hi ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const Eric = new CordialPerson('Newman');
  const Zelda = new CordialPerson('Jerry');
  
  Eric.speak();
  Zelda.speak();
// code example for New Binding

// Principle 4
Eric.speak.call(Zelda); Zelda.speak.apply(Eric);
// code example for Explicit Binding