function GameController(){

}

GameController.prototype.updatePlanePosition = function(e){
  var keyCode = e.keyCode;
  var neighbors = game.plane.getNeighbors();
  var nextPosition = game.getNextPosition(keyCode, neighbors);

  view.renderPlane(game.plane.getPosition());
  console.log(game.checkCollision(nextPosition));
  if(game.outOfBounds(nextPosition) || game.checkCollision(nextPosition)){
    game.endGame();
  }else{
    game.plane.updatePosition(nextPosition)
    console.log('you are fine !')
  }
  view.renderPlane(game.plane.getPosition());
}

GameController.prototype.animateAsteroids = function(){

    for (var i = 0; i < game.asteroids.length; i++){
      game.asteroids[i].updatePosition();
      console.log(game.asteroids[i].cell);
    }
    game.destroyAsteroids();
    game.spawnAsteroids();
    view.renderAsteroids(game.asteroids);
  };

var game = new Game(20,40);
var view = new GameView();
var controller = new GameController();

$(document).ready(function() {

  view.renderGrid(game.grid);
  view.renderPlane(game.plane.getPosition());
  view.listenKeyPress(controller.updatePlanePosition);

  game.spawnAsteroids();
  view.renderAsteroids(game.asteroids);

  // Animate asteroids that are on the board
  game.animateAsteroid(controller.animateAsteroids);
});
