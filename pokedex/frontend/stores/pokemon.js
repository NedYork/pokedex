var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var PokemonConstants = require("../constants/pokemonConstants");


var _pokemons = {};

var PokemonStore = new Store();

module.exports = PokemonStore;
