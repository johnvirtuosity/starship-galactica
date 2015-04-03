function GameView() {

}

GameView.prototype.renderGrid = function(grid){
  for (var i=0; i < grid.height; i++) {
    var row = $("<div class='row'></div>");
    $( '#grid').append(row);
    for (var j=0;j < grid.width; j++) {
      var cell = $("<div class='cell'></div>");
      row.append(cell);
    }
  }
};

GameView.prototype.renderGrid = function(grid){
  for (var i=0; i < grid.height; i++) {
    var row = $("<div class='row'></div>");
    $( '#grid').append(row);
    for (var j=0;j < grid.width; j++) {
      var cell = $("<div class='cell'></div>");
      row.append(cell);
    }
  }
};

GameView.prototype.listenKeyPress = function (callback){
  $('body').keypress(callback);
};

GameView.prototype.renderPlane = function (planeLocation) {
  planeLocation.toggleClass('plane');
};

GameView.prototype.renderAsteroids = function (asteroids) {
  $('.asteroid').removeClass('asteroid');
  for(var i = 0 ; i < asteroids.length; i++){
    this.renderAsteroid(asteroids[i]);
  }
};

GameView.prototype.renderAsteroid = function (asteroid) {
    asteroid.cell().addClass('asteroid');
    if (asteroid.cell().hasClass('plane')){
      game.endGame();
    }
  };



