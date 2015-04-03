function Game(width,height){
  this.grid = new Grid(width,height);
  this.plane = new Plane(this.grid.width, this.grid.height);
  this.asteroids = [];
  this.iterations = 0;
  this.level = 0;
  this.speed = 200;
  this.numberOfAsteroids = 2;
};

Game.prototype.getNextPosition = function(keyCode, positions){
  var nextPosition;
  switch(keyCode) {
  case 104:
      nextPosition = positions[1];
      break;
  case 106:
      nextPosition = positions[3];
      break;
  case 107:
      nextPosition = positions[0];
      break;
  case 117:
      nextPosition = positions[2];
      break;
  default:
      nextPosition = positions[4]; //if the user presses any other key, position stays the same.
  }
  return nextPosition;
};

Game.prototype.outOfBounds = function(next_position){
  var x = next_position[0];
  var y = next_position[1];
  if ((x > 0 && x < this.grid.width + 1) && (y > 0 && y < this.grid.height + 1)){
    return false;
  } else {
    return true;
  }
};

Game.prototype.checkCollision = function(nextPosition){
   var position = $('#grid .row:nth-child('+nextPosition[1]+') .cell:nth-child('+nextPosition[0]+')');
   if (position.hasClass('asteroid')){
    return true;
   } else {
    return false;
   }
};


Game.prototype.endGame = function(){
  //clear the screen
  $(".audioDemo").trigger('play');
  $('body').empty();
  $('body').css({
    'background-image': 'url(http://www.psdgraphics.com/file/explosion-in-space.jpg)'
  })
  $('body').append('<div id="explode">GAME OVER</div>');
};

Game.prototype.generateAsteroid = function(){
  var asteroidRow = this.getRandomNumber(0 , this.grid.height + 1);
  this.asteroids.push(new Asteroid(asteroidRow, this.grid.width));
};

Game.prototype.spawnAsteroids = function(numberOfAsteroids){
  var random = game.getRandomNumber(0,1000);
  if(random % 2 == 0){
    for(var i = 0; i < numberOfAsteroids ; i++){
      this.generateAsteroid();
    }
  }
};

Game.prototype.destroyAsteroids = function(){
  if(this.asteroids.length > 0){
    while(this.asteroids[0].col < 0){
      this.asteroids.splice(0,1)
    }
  }
};

Game.prototype.getRandomNumber = function(min, max){
// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
  return Math.floor(Math.random() * (max - min)) + min;
};

Game.prototype.animateAsteroid = function(callback) {
  // setInterval(callback, 200);
  setTimeout(callback, this.speed);
};

Game.prototype.setLevels = function(){
  this.iterations++;

  if (this.level <= this.grid.height){
    this.level = this.iterations / 100;
  }

  if (this.iterations % 100 == 0){
    this.speed = this.speed / (1 + (this.iterations / 1000)) ;
  }

};



