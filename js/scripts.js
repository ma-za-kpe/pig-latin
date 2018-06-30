//business logic
var pigLatin = function(englishWord) {

  if (typeof(englishWord) !== "string") {
    return englishWord;
  } else {
    return false
  }

  };




//iu logic
$(document).ready(function() {

  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var englishWord = $("input#word").val();
    var result = pigLatin(englishWord);

    $(".word").text(englishWord);

      if (!result) {                 // same as writing if (result === false)
        $(".not").text("not");
      } else {
        $(".not").text("");
      }

      $("#result").show();

  });

});
