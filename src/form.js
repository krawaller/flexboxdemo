var React = require('react'),
    Dropdown = require('./dropdown'),
    _ = require('lodash');

var Form = React.createClass({
  propTypes: {
    options: React.PropTypes.object.isRequired,
    values: React.PropTypes.object.isRequired,
    title: React.PropTypes.string.isRequired,
    callback: React.PropTypes.func.isRequired
  },
  render: function(){
    var p = this.props;
    return (
      <div className='form'>
        <strong key='title'>{p.title}</strong>
        {_.mapValues(p.options,function(opts,name){
          return (
            <div key={name} className='formrow'>
              <span>{name}: </span>
              <Dropdown options={opts} current={p.values[name]} callback={p.callback.bind(this,name)} />
            </div>
          );
        },this)}
      </div>
    );
  }
});

module.exports = Form;