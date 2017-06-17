import React from 'react';
import NavHeader from './Nav.js';
import { Provider } from 'react-redux';
import store from '../stores/AllStore';
import {reAuthorise} from '../reducers/ReAuthorise';
import '../styles/theme.css';

export default class App extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        //let store = configureStore()
        const email = localStorage.getItem('user_email');
        const password = localStorage.getItem('user_pass');
        if (email !== null && password !== null) {

            
          // we can call dispatch method of store here directly,
          store.dispatch(reAuthorise(email,password));
        }
        return (
            <Provider store={store}>

                <div className="wrapper">
                    <NavHeader />
                    {this.props.children}
                </div>

            </Provider>
        );
    }
}