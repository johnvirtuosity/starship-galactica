
function Asteroid(){
  this.id = 0;
  this.cell = 0;
  this.row = 0;
}

var generateAsteroid = function(){
  var new_asteroid = new Asteroid();
  //var id = new Date();
  //new_asteroid.id = id.format( "yyyymmddhhmmtttt" );
  //new_asteroid.id = id;
  return new_asteroid;
};

var spawnAsteroid = function(){
  var asteroid = generateAsteroid();
  var my_row = Math.round((Math.random() *25 ) + 1);
  var my_cell = Math.round((Math.random() *50) + 1);

  console.log( 'cell:' + my_cell + ' row:' + my_row)

  asteroid.cell = my_cell;
  asteroid.row = my_row;
  return asteroid;
};

// function moveAsteroids(){
//   console.log( 'our asteroids ' + @asteroids );

// }


