var React = require('react');

var ToyDetail = React.createClass({
  getInitialState: function () {
    return { toy: null };
  },

  componentDidMount: function () {
    ToyStore.addListener(this.getStateFromStore);
    ApiUtil.fetchToy(parseInt(this.props.routeParams.id));
  },

  componentWillUnmount: function () {

  },

  componentWillReceiveProps: function () {

  },

  getStateFromStore: function () {
    if (!this.props.routeParams) {
      return;
    }


  },

  _onChange: function () {

  },

  render: function () {
    return (
      <div>

      </div>
    );
  }
});

module.exports = ToyDetail;
