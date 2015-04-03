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


var game = new Game(20,40);

GameController.prototype.animateAsteroids = function(){

    game.setLevels();

    for (var i = 0; i < game.asteroids.length; i++){
      game.asteroids[i].updatePosition();
    }

    game.destroyAsteroids();
    game.spawnAsteroids(game.level); //you need to spwan a certain number of asteroids

    view.renderAsteroids(game.asteroids);

    setTimeout(controller.animateAsteroids, game.speed);
  };

GameController.prototype.startGame = function(e){
  var keyCode = e.keyCode;
  if (keyCode == 32){
    return (keyCode == 32);
  }
};

var view = new GameView();
var controller = new GameController();

$(document).ready(function() {

  $(window).keypress(function(e) {
    if (e.keyCode == 32) {
    $('#start-game').css('display','none');
    view.renderGrid(game.grid);
    view.renderPlane(game.plane.getPosition());
    view.listenKeyPress(controller.updatePlanePosition);

    game.spawnAsteroids();
    view.renderAsteroids(game.asteroids);

    game.animateAsteroid(controller.animateAsteroids);
    }
  });

});
