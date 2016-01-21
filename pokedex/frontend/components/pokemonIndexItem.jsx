var React = require('react');
var History = require('react-router').History;

var PokemonIndexItem = React.createClass({

  mixins: [History],

  showDetail: function (e) {
    e.preventDefault();

    this.history.pushState(null, "/pokemon/" + this.props.pokemon.id);
  },

  render: function () {
    return (
      <li
        className="poke-list-item" onClick={this.showDetail}>
        {this.props.pokemon.name} - {this.props.pokemon.poke_type}
      </li>
    );
  }
});

module.exports = PokemonIndexItem;


// createRecipe: function(e){
//   e.preventDefault();
//   // this.state == {name: "kale"}
//   // RecipeStore.create(this.state);
//   // RecipeStore.create({name: this.state.name}); // ugly.
//
//   var cb = function (recipe) {
//     var stateData = null;
//     this.history.pushState(stateData, "/recipes/" + recipe.id);
//   }.bind(this);
//
//   RecipeActions.createRecipe(this.state, cb);
//   // RecipeApiUtil.createRecipe(this.state, cb); // also possible.
//   // here we don't hae a recipe id yet, so we can't redirect. :(
// },
