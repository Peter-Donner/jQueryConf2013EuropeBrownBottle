requirejs.config({
  "baseUrl": "./js/",
  "paths": {
    "jquery": "libs/jquery-2.0.2.min"
  }
});

require(["jquery", "./calc-parser"],
function($, parser) {
  $("#calcContainer").on("click", ".btn", function(event) {
    switch($(this).text()) {
      default:
      console.log("click " + $(this).text());
      break;
    }
  });
});
