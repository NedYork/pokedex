var React = require('react'),
    ToyIndexItem = require('./toyIndexItem');

var ToysIndex = React.createClass({
  render: function () {
    var toys = this.props.toys.map(function (toy) {
      return <ToyIndexItem key={toy.id} toy={toy} />;
    });
    return (
      <ul>
        {toys}
      </ul>
    );
  }
});

module.exports = ToysIndex;
