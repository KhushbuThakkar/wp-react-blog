import * as types from './actionTypes';
import Globals from '../Globals';
import {browserHistory} from 'react-router';
var WPAPI = require( 'wpapi' );

export function login(email, password) {
  console.log('login called');
  return dispatch => {
    dispatch(setLoginPending(true));

     var wp = new WPAPI({
        endpoint: Globals.WP_API_URL,
        username: email,
        password: password
    });

    wp.users().me().then(function( response ) {
         dispatch(setLoginPending(false));
       if (response.id) {
              dispatch(setLoginSuccess(true,email,password,response));
                browserHistory.push("/");
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

export function setLoginPending(isLoginPending) {
  return {
    type: types.SET_LOGIN_PENDING,
    isLoginPending
  };
}

export function setLoginSuccess(isLoginSuccess,email,password,profile) {
  console.log(isLoginSuccess,'isLoginSuccess')
  console.log(email,'userEmail from setLoginSuccess');
  localStorage.setItem('user_email', email);
  localStorage.setItem('user_pass', password);


  return {
    type: types.SET_LOGIN_SUCCESS,
    isLoginSuccess:isLoginSuccess,
    email:email,
    password:password,
    profile:profile
  };
}

export function setLoginError(loginError) {
  return {
    type: types.SET_LOGIN_ERROR,
    loginError
  }
}

export function setProfileData(profile) {
  console.log('from setProfileData');
  return {
    type: types.SET_PROFILE_DATA,
    profile:profile
  }
}

export function logout() {
  localStorage.removeItem('user_email');
  localStorage.removeItem('user_pass');  
  console.log('removed data from cache')
  browserHistory.push("/login");
  return {
    type: types.SET_LOGOUT_SUCCESS
  }

}
export default function reducer(state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null,
  userData:{},
  profile:{},
  logoutSuccess:false
}, action) {
  switch (action.type) {
    case types.SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case types.SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess,
        userData:{email:action.email,password:action.password},
        profile:action.profile
      });

    case types.SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });    

    case types.SET_LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        logoutSuccess: action.logoutSuccess,
        isLoginSuccess:false,
        userData:{}
      });
    case types.SET_PROFILE_DATA:
    console.log('profile from reducer',action.profile);
      return Object.assign({}, state, {
        profile:action.profile
      });

    default:
      return state;
  }
}