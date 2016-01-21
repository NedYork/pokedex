var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var ToyConstants = require("../constants/toyConstants");

var _toys = {};
var ToyStore = new Store(AppDispatcher);
var _detailToy;

ToyStore.all = function () {
  var keys = Object.keys(_toys);
  return keys.map(function (key) {
    return _toys[key];
  });
};

ToyStore.find = function (id) {
  return _toys[id];
};

ToyStore.resetToys = function (toys) {
  _toys = {};
  toys.forEach(function (toy) {
    _toys[toy.id] = toy;
  });
  ToyStore.__emitChange();
};

ToyStore.resetDetailToy = function (toy) {
  _detailToy = toy;
  ToyStore.__emitChange();
};

ToyStore.detailToy = function () {
  return _detailToy;
};

ToyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ToyConstants.TOYS_RECEIVED:
      ToyStore.resetToys(payload.toys);
      break;
    case ToyConstants.TOY_RECEIVED:
      ToyStore.resetDetailToy(payload.toy);
      break;
  }
};

module.exports = ToyStore;
