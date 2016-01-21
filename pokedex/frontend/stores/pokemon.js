var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var PokemonConstants = require("../constants/pokemonConstants");


var _pokemons = {};

var PokemonStore = new Store(AppDispatcher);

PokemonStore.all = function () {
  var keys = Object.keys(_pokemons);
  return keys.map(function (key) {
    return _pokemons[key];
  });
};

PokemonStore.resetPokemons = function (pokemons) {
  _pokemons = {};
  pokemons.forEach(function (pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });
  PokemonStore.__emitChange();
};

PokemonStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      PokemonStore.resetPokemons(payload.pokemons);
      break;
  }
};

module.exports = PokemonStore;
