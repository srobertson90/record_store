var _ = require('lodash');
var Record = require('./record');

var Store = function(input){ 
  if (input === undefined) input = {};
  this.company = input.company ? input.company : "Generic";
  this.city = input.city ? input.city : "Somewhere";
  this.balance = input.balance ? input.balance : 0 ;
  this.accounts = [];
};

Store.prototype = {


};

module.exports = Store;