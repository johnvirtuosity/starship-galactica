function Asteroid(row, col){
  // this.id = 0;
  this.row = row;
  this.col = col;
  this.cell = $('#grid .row:nth-child('+this.row+') .cell:nth-child('+this.col+')');
}
