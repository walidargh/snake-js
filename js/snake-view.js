var Board = require ('./snake.js');

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
