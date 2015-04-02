function GameController(){

}

GameController.prototype.updatePlanePosition = function(e){
  var keyCode = e.keyCode;
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

GameController.prototype.animateAsteroids = function(){

    for (var i = 0; i < game.asteroids.length; i++)
        {
              game.asteroids[i].updatePosition();
              console.log(game.asteroids[i].cell);

        }
        game.spawnAsteroids();
        console.log(game.asteroids);
        view.renderAsteroids(game.asteroids);
  };

var game = new Game(50,100);
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
