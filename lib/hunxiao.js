"use strict";

var myname = 'wumengzhao';
var myhobby = 'reading';

var fn = function fn() {
  var newValue = myname + myhobby + 'ddd';

  var myfuncction = function myfuncction() {
    return myname + myhobby + newValue;
  };

  return myfuncction();
};