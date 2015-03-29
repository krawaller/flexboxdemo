var React = require('react'),
    _ = require('lodash'),
    Child = require('./child'),
    Form = require('./form');

var parentoptions = {
  flexDirection: ["row","row-reverse","column","column-reverse"],
  justifyContent: ["flex-start","flex-end","center","space-between","space-around"],
  alignItems: ["flex-start","flex-end","center","stretch","baseline"],
  flexWrap: ["nowrap","wrap","wrap-reverse"],
  alignContent: ["flex-start","flex-end","center","stretch","space-between","space-around"]
};

var childoptions = {
  alignSelf: ["auto","flex-start","flex-end","center","baseline","stretch"],
  flexGrow: _.range(0,6),
  order: _.range(-10,11)
};

var Demo = React.createClass({
  getInitialState: function(){
    return {
      children: _.range(1,5).map(function(n){
        return _.extend(_.mapValues(childoptions,_.first),{ ID: n, order: 0, flexGrow: 0 });
      }),
      parent: _.mapValues(parentoptions,_.first),
      selectedId: 0
    };
  },
  setValue: function(){
    var arr = Array.prototype.slice.call(arguments),
        val = arr.pop(),
        prop = arr.pop(),
        s = this.state;
    while(arr.length) s = s[arr.shift()];
    s[prop] = _.isFinite(parseInt(val)) ? parseInt(val) : val;
    this.setState(this.state);
  },
  render: function(){
    var s = this.state, child = s.selectedId, cbmaker = Function.prototype.bind.bind(this.setValue,this);
    return (
      <div className="wrapper" key={Date() /* rebuild DOM nodes to prevent Chrome flex render bug */}>
        <p>
Flexbox demo! Woo! more info <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">here</a>.
        </p>
        <div className="forms">
          <Form title="container" options={parentoptions} values={s.parent} callback={cbmaker("parent")} />
          <Form title={"child #"+(child+1)} options={childoptions} values={s.children[child]} callback={cbmaker("children",child)} />
        </div>
        <div className="container" style={s.parent}>
          {s.children.map(function(c,n){
            return <Child key={c.ID} def={c} selected={n===child} callback={cbmaker("selectedId",n)} />;
          },this)}
        </div>
      </div>
    );
  }
});

module.exports = Demo;