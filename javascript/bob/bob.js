var Bob = function() {};

Bob.prototype.hey = function(input) {

  // Conditions and Variables.
  var response,
      // Silence is just whitespace which won't pass to the array test.
      silence = input.trim().split('').length < 1,
      // Caching the lastChar to avoid running the length of the input several
      // times, also to keep code under 80 chars of length.
      lastChar = input.charAt(input.length-1),
      // If the input is written in all caps
      // then we're sure we're shouting.
      shouting = input === input.toUpperCase() &&
                 input !== input.toLowerCase(),
      // Input should be a normal question: it has a question mark at the end,
      // and it is not being shouted.
      asking = lastChar === '?' && !shouting;

  // Control of Responses.
  if(asking) {
    response = 'Sure.';
  } else if(shouting) {
    response = 'Whoa, chill out!';
  } else if(silence) {
    response = 'Fine. Be that way!';
  } else {
    response = 'Whatever.';
  };

  // Single Response Output
  return response;
};

module.exports = Bob;