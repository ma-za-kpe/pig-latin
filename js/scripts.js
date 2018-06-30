//business logic
var pigLatin = function(englishWord) {
    return false;
  };





//iu logic
$(document).ready(function() {

  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var englishWord = $("input#word").val();
    var result = pigLatin(englishWord);

    $("#result").text(result);

  })

});
