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
  }
};

module.exports = ApiUtil;
