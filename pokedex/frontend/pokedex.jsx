var React = require('react'),
    ReactDOM = require('react-dom'),
    ApiUtil = require('./util/apiUtil'),
    App = require('./components/app'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    PokemonDetail = require('./components/pokemonDetail');

var PokemonStore = require('./stores/pokemon');
var PokemonsIndex = require('./components/pokemonsIndex');

window.ApiUtil = ApiUtil;
window.PokemonStore = PokemonStore;

var router = (
  <Router>
    <Route path='/' component={App}>
      <Route path='pokemon/:id' component={PokemonDetail}></Route>
    </Route>
  </Router>
);


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(router, document.getElementById('root'));
});


// var router = ( // defines the entire structure of our app
//     <Router>
//       <Route path="/" component={App}>
//         <IndexRoute component={RecipesList}/>
//         <Route path="recipes/new" component={RecipesForm}/>
//         <Route path="recipes/:id" component={RecipesListItem}/>
//       </Route>
//     </Router>
// );
