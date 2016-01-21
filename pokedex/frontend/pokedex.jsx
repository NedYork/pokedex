var React = require('react'),
    ReactDOM = require('react-dom'),
    ApiUtil = require('./util/apiUtil');

var PokemonStore = require('./stores/pokemon');
window.ApiUtil = ApiUtil;
window.PokemonStore = PokemonStore;

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <div>
      {console.log("API UTIL: " + ApiUtil.fetchAllPokemons())}
      {console.log("POKEMON STORE: " + PokemonStore.all())}
    </div>,
    document.getElementById('root'));
});
