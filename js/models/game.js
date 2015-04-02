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
  }
  return nextPosition;
};

Game.prototype.endGame = function(){
  alert('OUCH !');
};

