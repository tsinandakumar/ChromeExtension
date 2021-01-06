import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import style from './ContactTextInput.css';

export default class ContactTextInput extends Component {

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newContact: PropTypes.bool
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',      
      email: this.props.email || ''
    };
  }

  handleSubmit = (evt) => {
    const { name, email } = this.state;
    this.props.onSave({name, email});
    if (this.props.newContact) {
      this.setState({ name: '', email: '' });
    }
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
 

  render() {
    return (
      <div>
      <input
        className={classnames({
          [style.edit]: this.props.editing,
          [style.new]: this.props.newContact
        })}
        type="text"
        placeholder={"Enter Name"}
        autoFocus="true"
        value={this.state.name}
        onChange={this.handleChange} 
        name="name"
        />
        <input
        className={classnames({
          [style.edit]: this.props.editing,
          [style.new]: this.props.newContact
        })}
        type="text"
        placeholder={"Enter Valid Email"}
        value={this.state.email}
        onChange={this.handleChange}
        name="email"
        />
      

      <button className={style.submitBtn} onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
