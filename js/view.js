function ViewPlane (plane, grid){
  this.init = function(){
    $('body').keypress(function(e){
      var neighbors = plane.getNeighbors();
      plane.setPlane();
      var next_position = 0
      switch(e.keyCode) {
      case 104:
          next_position =neighbors[1];
          break;
      case 106:
          next_position =neighbors[3];
          break;
      case 107:
          next_position =neighbors[0];
          break;
      case 117:
          next_position =neighbors[2];
          break;
      default:

      }
      if(plane.outOfBounds(grid, next_position)) {
        plane.endGame();
      } else {
        plane.updatePosition(next_position);
        plane.setPlane();
      }
  });
  };
};




