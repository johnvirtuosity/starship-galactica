
$(document).ready(function() {
  game = new Game(50,100);
  game.grid.renderGrid();
  game.plane.setPlane();

  var viewPlane = new ViewPlane(game.plane, game.grid);
  viewPlane.init();
});
