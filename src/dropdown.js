var React = require('react');

var Dropdown = React.createClass({
  propTypes: {
    options: React.PropTypes.object.isRequired,
    current: React.PropTypes.string.isRequired,
    callback: React.PropTypes.func.isRequired
  },
  changeOption: function(e){
    this.props.callback(this.refs.sel.getDOMNode().value);
  },
  render: function(){
    return (
      <select ref="sel" onChange={this.changeOption} defaultValue={''+this.props.current} >
        {this.props.options.map(function(o){
          return <option key={o} value={o}>{o}</option>;
        })}
      </select>
    );
  }
});

module.exports = Dropdown;