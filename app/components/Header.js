import React, { PropTypes, Component } from 'react';
import ContactTextInput from './ContactTextInput';

export default class Header extends Component {

  static propTypes = {
    addContact: PropTypes.func.isRequired
  };

  handleSave = (data) => {
    if (data.name.length !== 0) {
      this.props.addContact(data);
    }
  };

  render() {
    return (
      <header>
        <ContactTextInput
          newContact
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}
