import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import ContactTextInput from './ContactTextInput';
import style from './ContactItem.css';

export default class ContactItem extends Component {

  static propTypes = {
    contact: PropTypes.object.isRequired,
    editContact: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
    completeContact: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (data) => {
    console.log(data, "data")
    // const { contact, deleteContact, editContact } = this.props;
    // if (data.name.length === 0) {
    //   deleteContact(contact.id);
    // } else {
    //   editContact(contact.id, data);
    // }
    // this.setState({ editing: false });
  };

  handleComplete = () => {
    const { contact, completeContact } = this.props;
    completeContact(contact.id);
  };

  handleDelete = () => {
    const { contact, deleteContact } = this.props;
    deleteContact(contact.id);
  };

  render() {
    const { contact } = this.props;
    console.log(contact)
    let element;
    
      element = (
        <div className={style.view}>
         
          <label>
            {contact.name} - {contact.email}
          </label>
          <button
            className={style.destroy}
            onClick={this.handleDelete}
          />
        </div>
      );
  

    return (
      <li
        className={classnames({
          [style.completed]: contact.completed,
          [style.editing]: this.state.editing,
          [style.normal]: !this.state.editing
        })}
      >
        {element}
      </li>
    );
  }
}
