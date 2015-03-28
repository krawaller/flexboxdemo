var React = require('react'),
	_ = require('lodash');

var Child = React.createClass({
	onClick: function(){
		this.props.callback();
	},
	render: function(){
		var styles = this.props.def; // _.omit(this.props.def,"ID");
		return (
			<div onClick={this.onClick} style={styles} className={"child child"+this.props.def.ID+" "+["odd","even"][this.props.def.ID%2]+(this.props.selected ? " selectedchild":"")}>
				{_.map(styles,function(val,key){
					return <div key={key}>{key}: {val}</div>;
				},this)}
			</div>
		);
	}
});

module.exports = Child;