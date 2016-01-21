var PokemonActions = require('../actions/pokemonActions');

var ApiUtil = {
  fetchAllPokemons: function () {
    $.ajax({
      url: 'api/pokemon',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        PokemonActions.receiveAllPokemons(data);
      },
      error: function (data) {
        console.log(data);
      }
    });
  },

  fetchPokemon: function (id) {
    $.ajax({
      url: 'api/pokemon/' + id,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        PokemonActions.receiveSinglePokemon(data);
      },
      error: function (data) {
        console.log(data);
      }
    });
  },

  fetchAllToys: function (pokemonId) {
    $.ajax({
      url: 'api/pokemon' + pokemonId + "/toys",
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ToyActions.receiveAllToys(data);
      },
      error: function (data) {
        console.log(data);
      }
    });
  },

  fetchToy: function (pokemonId, toyId) {
    $.ajax({
      url: 'api/pokemon' + pokemonId + "/toys/" + toyId,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ToyActions.receiveSingleToy(data);
      },
      error: function (data) {
        console.log(data);
      }
    });
  }
};

module.exports = ApiUtil;
