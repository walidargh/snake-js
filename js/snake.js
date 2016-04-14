var DIRECTIONS = ["N", "S", "E", "W"];


function Snake() {
  this.direction = "E";
  this.segments = [[0,0], [0, 1], [0, 2], [0, 3]];
}

function Coord (coord) {
  this.coord = coord;
}

Coord.prototype.plus = function (dir) {
  if (dir === "N") {
    this.coord[0] += 1;
  } else if (dir === "S") {
    this.coord[0] -= 1;
  } else if (dir === "E") {
    this.coord[1] += 1;
  } else {
    this.coord[1] -= 1;
  }
};

Coord.prototype.equals = function () {

};

Coord.prototype.isOpposite = function () {

};

function Board(snake) {
  this.snake = snake;
}

module.exports = Snake;
module.exports = Board;
