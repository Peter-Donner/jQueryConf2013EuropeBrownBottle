requirejs.config({
  "baseUrl": "./js/",
  "paths": {
    "jquery": "libs/jquery-2.0.2.min"
  }
});

require(["./calc"], function(parser) {
  test("example", function() {
    ok(true, "ok");
  })
});