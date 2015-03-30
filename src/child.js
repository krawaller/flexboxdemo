var React = require('react'),
    _ = require('lodash'),
    ptypes = React.PropTypes;

var Child = React.createClass({
  propTypes: {
    def: ptypes.objectOf(ptypes.oneOfType([ptypes.string,ptypes.number])).isRequired,
    selected: ptypes.bool,
    callback: ptypes.func.isRequired
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