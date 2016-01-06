var words = function(stringInput) {
  // Create a recolectorArray with each one of the words, and an
  // empty object to work with.
  var recolectorArray = stringInput.trim().split(/\s/),
      finalReport = {};
  // We iterate each word recolectorArray, and verify if it's already
  // present on the finalReport object before we pass each one as a new
  // object property.
  recolectorArray.forEach(function(singleWord){
    if(finalReport.hasOwnProperty(singleWord)){
      finalReport[singleWord]++;
    } else {
      finalReport[singleWord] = 1;
    }
  });
  return finalReport;
};

module.exports = words;