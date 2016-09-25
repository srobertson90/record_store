var _ = require('lodash');
var Record = require('./record');

var Store = function(input){ 
  if (input === undefined) input = {};
  this.company = input.company ? input.company : "Generic";
  this.city = input.city ? input.city : "Somewhere";
  this.balance = input.balance ? input.balance : 0;
  this.records = [];
};

Store.prototype = {
  addRecord: function(input){
    var str = "" + (this.records.length + 1);
    var pad = "00000";
    input.id = pad.substring(0, pad.length - str.length) + str;
    record = new Record(input);
    this.records.push(record);
  },
  findByTitle: function(findTitle){
    foundRecord = _.find(this.records, ["title", findTitle]);
    return foundRecord;
  }

};

module.exports = Store;