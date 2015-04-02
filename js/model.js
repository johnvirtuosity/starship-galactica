function Plane(){

};

Plane.prototype.setPlane = function(width, height){
  var position_x = Math.floor(width/2);
  var position_y = Math.floor(height/2);
  $('#grid .row:nth-child('+position_y+') .cell:nth-child('+position_x+')').addClass('plane');
};