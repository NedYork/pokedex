var React = require('react');
var PokemonsIndex = require('./pokemonsIndex');

var App = React.createClass({
  render: function () {
    return (
      <div id="pokedex">
        {this.props.children}
        <div className="pokemon-index-pane">
          <PokemonsIndex />
        </div>
      </div>
    );
  }
});

module.exports = App;
