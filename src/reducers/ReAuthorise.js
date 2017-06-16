import {setLoginPending ,setLoginSuccess ,setLoginError} from './Login';
import {browserHistory} from 'react-router';
var WPAPI = require( 'wpapi' );

export function reAuthorise(email, password) {
  console.log('reAuthorise called');
  return dispatch => {
    dispatch(setLoginPending(true));
     var wp = new WPAPI({
        endpoint: 'http://wpreact.dev/wp-json/',
        username: email,
        password: password
    });

    wp.users().me().then(function( response ) {
        console.log(response,'profile form reAuthorise')
         dispatch(setLoginPending(false));
       if (response.id) {
              dispatch(setLoginSuccess(true,email,password,response));
        } else {
            var error = new Error(response.statusText || response.status)
            error.response = response
            dispatch(setLoginError(error));
        }
    }).catch(function( err ) {
        dispatch(setLoginError(new Error('Invalid email and password')));
    });
  }
}