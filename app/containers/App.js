import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as ContactActions from '../actions/contacts';
import style from './App.css';

@connect(
  state => ({
    contacts: state.contacts
  }),
  dispatch => ({
    actions: bindActionCreators(ContactActions, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { contacts, actions } = this.props;
    console.log(contacts)
    debugger
    return (
      <div className={style.normal}>
        <Header addContact={actions.addContact} />
        <MainSection contacts={contacts} actions={actions} />
      </div>
    );
  }
}
