var React = require('react'),
    _ = require('lodash');

var Child = React.createClass({
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