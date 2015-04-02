
$(document).ready(function() {
  var grid = new Grid(50,100);
  grid.renderGrid();

  var plane = new Plane(grid.width, grid.height);
  plane.setPlane();

  var viewPlane = new ViewPlane(plane, grid);
  viewPlane.init();
});
