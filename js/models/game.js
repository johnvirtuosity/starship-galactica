function Game(width,height){
 this.grid = new Grid(width,height);
 this.plane = new Plane(this.grid.width, this.grid.height);
 this.asteroids = [];
};