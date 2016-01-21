var React = require('react');
var PokemonStore = require('../stores/pokemon.js');
var ApiUtil = require('../util/apiUtil');
var PokemonIndexItem = require('./pokemonIndexItem');

var PokemonsIndex = React.createClass({
  getInitialState: function () {
    return { pokemons: [] };
  },

  _onChange: function () {
    this.setState({ pokemons: PokemonStore.all() });
  },

  componentDidMount: function () {
    PokemonStore.addListener(this._onChange);
    ApiUtil.fetchAllPokemons();
  },

  componentWillUnmount: function () {
    PokemonStore.remove(this._onChange);
  },

  render: function () {
    var pokemonsList = this.state.pokemons.map(function (pokemon) {
      return (
        <PokemonIndexItem
          pokemon={pokemon}
          key={pokemon.id} />
      );
    });

    return (
      <ul>
        {pokemonsList}
      </ul>
    );
  }
});

module.exports = PokemonsIndex;
