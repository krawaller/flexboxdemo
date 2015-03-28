var React = require('react');

var Dropdown = React.createClass({
	changeOption: function(e){
		this.props.callback(this.refs.woo.getDOMNode().value);
	},
	render: function(){
		var opts = this.props.options,
			current = this.props.current;
		if (current === undefined){
			console.log("ALARM!",opts)
		}
		return (
			<select ref="woo" onChange={this.changeOption} defaultValue={''+current} className={"woo: "+current}>
				{this.props.options.map(function(o){
					return <option value={o}>{o}</option>;
				})}
			</select>
		);
	}
});

module.exports = Dropdown;