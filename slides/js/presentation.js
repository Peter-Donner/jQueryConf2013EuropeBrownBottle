$(function() {
	var calculatePositions = function() {
		var y = 0;
		var xOffset = 1300;
		var yOffset = 850;
		var x = -xOffset;
		$(".slide").each(function() {
			var $el = $(this);
			$el.addClass("step"); // impress.s needs step and slide class
			if($el.hasClass("new-topic")) {
				// go left and move down, like a typewriter
				x = 0;
				y += yOffset;
			} else {
				// go right to the next slide
				x += xOffset;
			}
			$el.attr("data-x", x);
			$el.attr("data-y", y);
		});
	};
/*
	$("body").on("keydown", function(event) {
		switch(event.which) {
			case 33:
			break;
			case 34:
			break;
			case 66:
			break;
			default:
			break;
		}
	});

	$(document).on("impress:stepenter", function(e) {
		if (!e.target.id) {
			return;
		}
		var prefix = "." + e.target.id + "-after-";
		for (var i=1;; i++) {
			var selector = $(prefix + i);
			if (selector.length > 0) {
				console.log("treffer");
			} else {
				break;
			}
		}		
	});

	$(document).on("impress:stepleave", "#animations", function(e) {
		console.log("animations stepleave");
		console.dir(e);
	});

	$(document).on("impress:stepenter", "#start", function(e) {
		console.log("start");
	});
*/
	calculatePositions();
	impress().init();
	SyntaxHighlighter.all();
});