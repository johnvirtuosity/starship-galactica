function Grid (height, width) {
  this.width = width;
  this.height = height;
}

function ViewPlane (){

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
