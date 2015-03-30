var React = require('react'),
    Dropdown = require('./dropdown'),
    _ = require('lodash'),
    ptypes = React.PropTypes;

var Form = React.createClass({
  propTypes: {
    options: ptypes.objectOf(ptypes.arrayOf(ptypes.oneOfType([ptypes.string,ptypes.number]))).isRequired,
    values: ptypes.objectOf(ptypes.oneOfType([ptypes.string,ptypes.number])).isRequired,
    title: ptypes.string.isRequired,
    callback: ptypes.func.isRequired
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