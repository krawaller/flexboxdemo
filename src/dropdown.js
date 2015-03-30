var React = require('react'),
    ptypes = React.PropTypes;

var Dropdown = React.createClass({
  propTypes: {
    options: ptypes.arrayOf(ptypes.oneOfType([ptypes.string,ptypes.number])).isRequired,
    current: ptypes.oneOfType([ptypes.string,ptypes.number]).isRequired,
    callback: ptypes.func.isRequired
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