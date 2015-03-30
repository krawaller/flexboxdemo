var React = require('react'),
    _ = require('lodash');

var Child = React.createClass({
  propTypes: {
    def: React.PropTypes.object.isRequired,
    selected: React.PropTypes.bool,
    callback: React.PropTypes.func.isRequired
  },
  render: function(){
    var p = this.props;
    return (
      <div onClick={_.ary(p.callback,0)} style={p.def} className={"child"+(p.selected ? " selectedchild":"")}>
        {_.map(p.def,function(val,key){
          return <div key={key}>{key}: {val}</div>;
        },this)}
      </div>
    );
  }
});

module.exports = Child;