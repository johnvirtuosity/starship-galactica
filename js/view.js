function GameView() {

}

GameView.prototype.renderGrid = function(grid){
  for (var i=0; i < grid.height; i++) {
    var row = $("<div class='row'></div>");
    $( '#grid').append(row);
    for (var j=0;j < grid.width; j++) {
      var cell = $("<div class='cell'></div>");
      row.append(cell);
    }
  }
};

GameView.prototype.listenKeyPress = function (controller, callback){
  $('body').keypress(controller, callback);
};

GameView.prototype.renderPlane = function (plane_location) {
  plane_location.toggleClass('plane');
};




// function placeAsteroid() {
//     var asteroid = spawnAsteroid();
//     var cell = 50;
//     var row = asteroid.row;
//     // console.log ( $('#grid .row:nth-child(10) .cell:nth-child(10)' ) );
//     $('#grid .row:nth-child('+row+') .cell:nth-child('+cell+')').addClass('asteroid');
//     //Line below may belong in placeAsteroids
//     $asteroids = [];
//     $asteroids.push asteroid;
// }


// function generateAsteroids() {
//   for (var i=1 ; i<10 ; i++) {
//     placeAsteroid();
//   }
// }

