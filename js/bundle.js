/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var View = __webpack_require__(2);
	
	var test = new View($(".snake"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	var DIRECTIONS = ["N", "S", "E", "W"];
	
	
	function Snake() {
	  this.direction = "E";
	  this.segments = [[0,0], [0, 1], [0, 2], [0, 3]];
	}
	Snake.prototype.turn = function (dir) {
	  this.direction = dir;
	  var segs = this.segments;
	  var head = segs[segs.length - 1];
	  console.log(head);
	  this.move(head);
	};
	
	Snake.prototype.move = function (head) {
	  var dir = this.direction;
	  if (head === undefined) {
	    this.segments.forEach(function(segment) {
	      segment.plus(dir);
	    });
	  } else {
	    var segs = this.segments;
	    segs.forEach(function (segment) {
	      if (segment === head) {
	        segment.plus(dir);
	      }
	    });
	  }
	};
	
	Array.prototype.plus = function(dir) {
	  if (dir === "N") {
	    this[0] += 1;
	  } else if (dir === "S") {
	    this[0] -= 1;
	  } else if (dir === "E") {
	    this[1] += 1;
	  } else {
	    this[1] -= 1;
	  }
	};
	
	Array.prototype.equals = function () {
	
	};
	
	Array.prototype.isOpposite = function () {
	
	};
	
	function Board() {
	  this.snake = new Snake();
	}
	
	module.exports = Board;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Board = __webpack_require__ (1);
	
	function View ($el) {
	  this.$el = $el;
	  this.board = new Board ();
	  var snake = this.board.snake;
	  $(document).on("keydown", function(event) {
	    if (event.keyCode === 37) {
	      snake.turn("W");
	    } else if (event.keyCode === 38) {
	      snake.turn("N");
	    } else if (event.keyCode === 39) {
	      snake.turn("E");
	    } else if (event.keyCode === 40) {
	      snake.turn("S");
	    } else {
	      return;
	    }
	  });
	  setInterval(function () {
	    snake.move();
	    console.log(snake.segments[0], snake.segments[1], snake.segments[2], snake.segments[3]);
	  }, 2000);
	
	}
	
	module.exports = View;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map