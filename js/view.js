function Grid (height, width) {
  this.width = width;
  this.height = height;
}

function ViewPlane (plane){
  this.init = function(){
    $('body').keypress(function(e){
      var neighbors = plane.getNeighbors();
      plane.setPlane();
      switch(e.keyCode) {
      case 104:
          plane.updatePosition(neighbors[1]);
          break;
      case 106:
          plane.updatePosition(neighbors[3]);
          break;
      case 107:
          plane.updatePosition(neighbors[0]);
          break;
      case 117:
          plane.updatePosition(neighbors[2]);
          break;
      default:

      }
      plane.setPlane();
    });
  }
}

Grid.prototype.renderGrid = function() {
  for (var i=0; i < this.height; i++) {
    var row = $("<div class='row'></div>");
    $( '#grid').append(row);
    for (var j=0;j < this.width; j++) {
      var cell = $("<div class='cell'></div>");
      row.append(cell);
    }
  }
};



