var Hamming = {
  compute: function(strand1,strand2) {
    if (strand1.length === strand2.length) {
      var diffCount = 0;
      strand1.split('').map(function(letter, index, source) {
        if (source[index] !== strand2[index]) {
          diffCount += 1;
        }
      });
      return diffCount;
    } else {
      throw new Error('DNA strands must be of equal length.');
    }
  }
};

module.exports = Hamming;