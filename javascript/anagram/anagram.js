var anagrammer = function(refInput) {

  var workArray = [],
      matchList = [];

  var raw = function(thing) {
        return thing.toLowerCase().split('').sort().join('');
      };

  this.matches = function() {
    if (typeof arguments[0] === 'string' && arguments.length === 1) {
      workArray = [].slice.call(arguments);
    } else if (typeof arguments[0] === 'string' && arguments.length !== 1) {
      workArray = [].slice.call(arguments);
    } else {
      workArray = arguments[0];
    }
    if (workArray[0].toLowerCase() !== refInput.toLowerCase()) {
      workArray.map(function(option){
        if (raw(option) === raw(refInput)) {
          matchList.push(option);
        }
      });
    }
    return matchList;
  };
  return this;
};

module.exports = anagrammer;