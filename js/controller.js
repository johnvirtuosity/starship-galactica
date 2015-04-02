
$(document).ready(function() {
  var grid = new Grid(25,50);
  grid.renderGrid();

  var plane = new Plane(grid.width, grid.height);
  plane.setPlane();

  var viewPlane = new ViewPlane(plane, grid);
  viewPlane.init();

  generateAsteroids();

  //moveAsteroids();
});
