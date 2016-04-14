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
