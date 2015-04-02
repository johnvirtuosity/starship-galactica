// Constructor Function
function Asteroid(row, col){
  // this.id = 0;
  this.row = row;
  this.col = col;
}

Asteroid.prototype.updatePosition = function(){
    this.col--;
};

Asteroid.prototype.cell = function(){
   return $('#grid .row:nth-child('+this.row+') .cell:nth-child('+this.col+')');
};

// Literal
// var Asteroid2 = function(row, col){
// // this.id = 0;
//   row: row;
//   col: col;
//   cell: $('#grid .row:nth-child('+this.row+') .cell:nth-child('+this.col+')')
// }
