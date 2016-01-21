var React = require('react'),
    ReactDOM = require('react-dom'),
    ApiUtil = require('./util/apiUtil');

var PokemonStore = require('./stores/pokemon');
var PokemonsIndex = require('./components/pokemonsIndex');

window.ApiUtil = ApiUtil;
window.PokemonStore = PokemonStore;

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <div>
      <PokemonsIndex />
    </div>,
    document.getElementById('root'));
});
