var Record = function(input){
  if (input === undefined) input = {};
  this.id = input.id ? input.id : "00000";
  this.artist = input.artist ? input.artist : "Artist";
  this.title = input.title ? input.title : "Album";
  this.price = input.price ? input.price : 0.00;
};

Record.prototype = {

};

module.exports = Record;