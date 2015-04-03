function Game(width,height){
 this.grid = new Grid(width,height);
 this.plane = new Plane(this.grid.width, this.grid.height);
 this.asteroids = [];
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

Game.prototype.checkCollision = function(nextPosition){
   var position = $('#grid .row:nth-child('+nextPosition[1]+') .cell:nth-child('+nextPosition[0]+')');
   if (position.hasClass('asteroid')){
    return true;
   } else {
    return false;
   }
};


Game.prototype.endGame = function(){
  // alert('OUCH !');
  //clear the screen
  $('body').empty();
  $('body').css({
    'background-image': 'url(http://www.psdgraphics.com/file/explosion-in-space.jpg)'
  })
  $('body').append('<div id="explode">GAME OVER</div>');
  //create the div 'explode' and fill it with the words 'GAME OVER'
};

Game.prototype.generateAsteroid = function(){
  var asteroidRow = this.getRandomNumber(0 , this.grid.height);
  this.asteroids.push(new Asteroid(asteroidRow, this.grid.width));
};

Game.prototype.spawnAsteroids = function(){
  var numberOfAsteroids = this.getRandomNumber(0,10);
  for(var i = 0; i < numberOfAsteroids ; i++){
    this.generateAsteroid();
  }
};

Game.prototype.getRandomNumber = function(min, max){
// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
  return Math.floor(Math.random() * (max - min)) + min;
};



