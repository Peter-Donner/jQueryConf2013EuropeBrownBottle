requirejs.config({
  "baseUrl": "./js/",
  "paths": {
    "jquery": "libs/jquery-2.0.2.min"
  }
});

require(["./calc-parser"], function(parser) {
	test("tokenizer", function() {
		deepEqual(parser.tokenize(""), [], "empty string returns empty array")
	})
});