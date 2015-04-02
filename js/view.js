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

GameView.prototype.listenKeyPress = function (updateFunction){
  $('body').keypress(updateFunction);
};

GameView.prototype.renderPlane = function (plane_location) {
  plane_location.toggleClass('plane');
};


// function ViewPlane (plane, grid){
//   this.init = function(){
//     $('body').keypress(function(e){
//       var neighbors = plane.getNeighbors();
//       plane.setPlane();
//       var next_position = 0
//       switch(e.keyCode) {
//       case 104:
//           next_position =neighbors[1];
//           break;
//       case 106:
//           next_position =neighbors[3];
//           break;
//       case 107:
//           next_position =neighbors[0];
//           break;
//       case 117:
//           next_position =neighbors[2];
//           break;
//       if(plane.outOfBounds(grid, next_position)) {
//         plane.endGame();
//       } else {
//         plane.updatePosition(next_position);
//         plane.setPlane();
//       }
//   });
//   };
// };

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

