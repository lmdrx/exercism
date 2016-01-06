// This submit is made to access the nitpick menu...

//
// This is only a SKELETON file for the 'Hello World' exercise.
// It's been provided as a convenience to get you started writing code faster.
//

var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
  // 1st Iteration
  if(input){
    return "Hello, " + input + "!"
  } else {
    return "Hello, world!";
  }
};

module.exports = HelloWorld;