var AppDispatcher = require('../dispatcher/dispatcher');
var ToyConstants = require('../constants/toyConstants');

var ToyActions = {
  receiveAllToys: function (Toys) {
    AppDispatcher.dispatch({
      actionType: ToyConstants.TOYS_RECEIVED,
      toys: toys
    });
  },

  receiveSingleToy: function (Toy) {
    AppDispatcher.dispatch({
      actionType: ToyConstants.TOY_RECEIVED,
      toy: toy
    });
  }
};

module.exports = ToyActions;
