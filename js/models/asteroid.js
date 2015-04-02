var asteroid = function(){
  id: 0;
  cell: 0;
  row: 0;
}

var generateAsteroid = function(){
  //generate an asteroid and return asteroid object
  new_asteroid = new asteroid();
  //test assignment
  var id = new Date();
  //new_asteroid.id = id.format( "yyyymmddhhmmtttt" );
  new_asteroid.id = id;
  return new_asteroid;
};