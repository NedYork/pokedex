var React = require('react'),
    PokemonStore = require('../stores/pokemon'),
    ApiUtil = require('../util/apiUtil');

var PokemonDetail = React.createClass({
  getInitialState: function () {
    return { pokemon: null };
  },

  componentDidMount: function () {
    PokemonStore.addListener(this.getStateFromStore);
    ApiUtil.fetchPokemon(parseInt(this.props.routeParams.id));
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchPokemon(parseInt(newProps.routeParams.id));
  },

  getStateFromStore: function () {
    this.setState({ pokemon: PokemonStore.detailPokemon() });
    debugger
  },

  render: function () {
    var pokemonDetail;
    if (this.state.pokemon) {
      pokemonDetail = (
        <div className="detail">
          <h2>{this.state.pokemon.name}</h2>
          <h3>Type: {this.state.pokemon.poke_type}</h3>
          <img src={this.state.pokemon.image_url}/>
          <ul>
            <li>Attack: {this.state.pokemon.attack}</li>
            <li>Defense: {this.state.pokemon.defense}</li>
            <li>Moves: {this.state.pokemon.moves}</li>
          </ul>

        </div>
      );
    }


    return (
      <div>
        <div className="pokemon-detail-pane">
          {pokemonDetail}
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = PokemonDetail;

// getInitialState: function () {
//   return { pokemon: this.getStateFromStore(this.props.params.pokemonId) };
// },
//
// getStateFromStore: function (id) {
//   // var id = parseInt(this.props.params.pokemonId);
//   id = parseInt(id);
//   return (PokemonStore.find(id));
// },
//
// componentWillReceiveProps: function (newProps) {
//   this.setState(
//     { pokemon: this.getStateFromStore(newProps.params.pokemonId) }
//   );
// },
