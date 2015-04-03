function Plane(width, height){
  this.position_x = Math.floor(width/2);
  this.position_y = Math.floor(height/2);
};

// Plane.prototype.setPlane = function(){
//   this.getPosition().toggleClass('plane');
// };

Plane.prototype.getPosition = function(){
  return $('#grid .row:nth-child('+this.position_y+') .cell:nth-child('+this.position_x+')');
};

Plane.prototype.updatePosition = function(direction){
  this.position_x = direction[0];
  this.position_y = direction[1];
};

Plane.prototype.getNeighbors = function(){
  var x = this.position_x ;
  var y = this.position_y ;
  var neighbors = [[x + 1, y], [x - 1, y], [x, y - 1], [x, y + 1], [x,y]] ;
  return neighbors ;
};


