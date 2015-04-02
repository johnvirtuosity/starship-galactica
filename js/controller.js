
$(document).ready(function() {
  var grid = new Grid(50,100);
  var plane = new Plane();
  grid.renderGrid();
  plane.setPlane(grid.width, grid.height);

});
