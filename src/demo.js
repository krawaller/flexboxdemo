var React = require('react'),
	_ = require('lodash'),
	Child = require('./child'),
	Form = require('./form');

var parentoptions = {
	flexDirection: ["row","row-reverse","column","column-reverse"],
	flewWrap: ["nowrap","wrap","wrap-reverse"],
	justifyContent: ["flex-start","flex-end","center","space-between","space-around"],
	alignItems: ["flex-start","flex-end","center","stretch","baseline"],
	alignContent: ["flex-start","flex-end","center","stretch","space-between","space-around"]
};

var childoptions = {
	alignSelf: ["auto","flex-start","flex-end","center","baseline","stretch"],
	order: _.range(-10,11),
	flexGrow: _.range(0,6)
};

var Demo = React.createClass({
	childDefaults: function(n){
		return {
			ID: n,
			order: 0,
			flexGrow: 0,
			flexShrink: 1,
			flexBasis: "auto", // or value
			alignSelf: "auto", // ["auto","flex-start","flex-end","center","baseline","stretch"]
		};
	},
	parentDefaults: function(){
		return {
			flexDirection: "row", // [row,row-reverse,column,column-reverse]
			flewWrap: "nowrap", // [nowrap,wrap,wrap-reverse]
			justifyContent: "flex-start", // [flex-start,flex-end,center,space-between,space-around]
			alignItems: "flex-start", // [flex-start,flex-end,center,stretch,baseline]
			alignContent: "flex-start", // [flex-start,flex-end,center,stretch,space-between,space-around]
		};
	},
	getInitialState: function(){
		return {
			children: _.range(1,6).map(this.childDefaults),
			parent: this.parentDefaults(),
			selectedId: 0
		};
	},
	setValue: function(){
		var arr = Array.prototype.slice.call(arguments),
			val = arr.pop(),
			prop = arr.pop(),
			s = this.state;
		while(arr.length){ s = s[arr.shift()]; }
		s[prop] = _.isFinite(parseInt(val)) ? parseInt(val) : val;
		this.setState(s);
	},
	render: function(){
		var child = this.state.selectedId;
		return (
			<div>
				<Form title="container" options={parentoptions} values={this.state.parent} callback={this.setValue.bind(this,"parent")} />
				<Form key={"f"+child} title={"child #"+(child+1)} options={childoptions} values={this.state.children[child]} callback={this.setValue.bind(this,"children",child)} />
				<div className="container" style={this.state.parent}>
					{this.state.children.map(function(c,n){
						return <Child key={c.ID} def={c} selected={n===this.state.selectedId} callback={this.setValue.bind(this,"selectedId",n)} />;
					},this)}
				</div>
			</div>
		);
	}
});

module.exports = Demo;