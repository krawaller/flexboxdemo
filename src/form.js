var React = require('react'),
	Dropdown = require('./dropdown'),
	_ = require('lodash');

var Form = React.createClass({
	render: function(){
		var cb = this.props.callback;
		return (
			<div className='form'>
				<h3 key='title'>{this.props.title}</h3>
				{_.mapValues(this.props.options,function(opts,name){
					return (
						<div key={name}>
							<span>{name}: </span>
							<Dropdown options={opts} current={this.props.values[name]} callback={cb.bind(this,name)} />
						</div>
					);
				},this)}
			</div>
		);
	}
});

module.exports = Form;