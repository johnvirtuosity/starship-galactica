function GameController(model, view){
  this.model = model ;
  this.view = view ;
}

GameController.prototype.updatePlanePosition = function(e){
  var keyCode = e.keyCode;
  var controller = e.data;
  var game = controller.model;
  var view = controller.view
  var neighbors = game.plane.getNeighbors();
  var nextPosition = game.getNextPosition(keyCode, neighbors);

  view.renderPlane(game.plane.getPosition());

  if(game.plane.outOfBounds(game.grid, nextPosition)){
    view.renderPlane(game.plane.getPosition());
    game.endGame();
  }else{
    game.plane.updatePosition(nextPosition)
    view.renderPlane(game.plane.getPosition());
    console.log('you are fine !')
  }
}



$(document).ready(function() {
  var game = new Game(50,100);
  var view = new GameView();
  var controller = new GameController(game, view);
  view.renderGrid(game.grid);
  view.renderPlane(game.plane.getPosition());
  view.listenKeyPress(controller, controller.updatePlanePosition);




});
