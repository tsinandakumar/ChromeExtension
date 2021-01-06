import React, { Component, PropTypes } from 'react';
import ContactItem from './ContactItem';
import Footer from './Footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/ContactFilters';
import style from './MainSection.css';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: contact => !contact.completed,
  [SHOW_COMPLETED]: contact => contact.completed
};

export default class MainSection extends Component {

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
  }

  handleClearCompleted = () => {
    const atLeastOneCompleted = this.props.contacts.some(contact => contact.completed); 
    if (atLeastOneCompleted) {
      this.props.actions.clearCompleted();
    }
  };

  handleShow = (filter) => {
    this.setState({ filter });
  };


  renderFooter(completedCount) {
    const { contacts } = this.props;
    const { filter } = this.state;
    const activeCount = contacts.length - completedCount;

    if (contacts.length) {
      return (
        <Footer
          completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onClearCompleted={this.handleClearCompleted}
          onShow={this.handleShow}
        />
      );
    }
  }

  render() {
    const { contacts, actions } = this.props;
    const { filter } = this.state;

    const filteredContacts = contacts.filter(TODO_FILTERS[filter]);
    const completedCount = contacts.reduce(
      (count, contact) => (contact.completed ? count + 1 : count),
      0
    );

    return (
      <section className={style.main}>
        <ul className={style.contactList}>
          {filteredContacts.map(contact =>
            <ContactItem key={contact.id} contact={contact} {...actions} />
          )}
        </ul>        
        {this.renderFooter(completedCount)}
      </section>
    );
  }
}
