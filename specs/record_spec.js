var assert = require('assert');
var Record = require('../record');

describe('Record', function(){

  var test;
  var blank;

  before(function(){
    test = new Record({id: "00523", artist: "Amon Amarth",title: "Sutur Rising", price: 8.99});
    blank = new Record();
  });

  it('should have an album id', function(){
    assert.equal("00523", test.id);
  });

  it('should have an associated artist', function(){
    assert.equal("Amon Amarth", test.artist);
  });

  it('should have an album title', function(){
    assert.equal("Sutur Rising", test.title);
  });

  it('should have a price', function(){
    assert.equal(8.99, test.price);
  });

  it('should have a default album id', function(){
    assert.equal("00000", blank.id);
  });

  it('should have a default associated artist', function(){
    assert.equal("Artist", blank.artist);
  });

});