function Controller(game, view){
  this.game = game ;
  this.view = view
}

Controller.prototype.updatePlanePosition = function(e){
  console.log(e);

};



$(document).ready(function() {
  var game = new Game(50,100);
  var view = new GameView();
  var controller = new Controller(game, view);
  view.renderGrid(game.grid);
  view.listenKeyPress(controller.updatePlanePosition);
  view.renderPlane(game.plane.getPosition());



});
