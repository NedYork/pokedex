var React = require('react'),
    History = require('react-router').History;

var ToyIndexItem = React.createClass({
  mixins: [History],

  showDetail: function (e) {
    e.preventDefault();

    this.history.pushState(null, "toys/" + this.props.toy.id);
  },

  render: function () {
    return (
      <li
        className="toy-list-item"
        onClick={this.showDetail}>
        Name: {toy.name}<br/>
        Happiness: {toy.happiness}<br/>
        Price: {toy.price}<br/>
      </li>
    );
  }
});

module.exports = ToyIndexItem;

//
//
// showDetail: function (e) {
//   e.preventDefault();
//
//   this.history.pushState(null, "/pokemon/" + this.props.pokemon.id);
// },
//
// render: function () {
//   return (
//     <li
//       className="poke-list-item" onClick={this.showDetail}>
//       {this.props.pokemon.name} - {this.props.pokemon.poke_type}
//     </li>
//   );
// }
