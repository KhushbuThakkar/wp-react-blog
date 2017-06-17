import * as types from './actionTypes';
import Globals from '../Globals';
import {browserHistory} from 'react-router';
var WPAPI = require( 'wpapi' );

export function signup(email,password,username,displayName) {
	if(email && password && username && displayName)
	{
		return dispatch => {
			fetch(Globals.WP_URL + `api/get_nonce/?controller=user&method=register`, {
				method: 'GET',
	        }).then(response => {
	            return response.json();
	        }).then((json) => {
	        	//console.log(json)
	            if (json.status=="ok") {
	              fetch(Globals.WP_URL + `api/user/register/?controller=user&method=register&username=${username}&email=${email}&nonce=${json.nonce}&display_name=${displayName}&user_pass=${password}&insecure=cool`, {
    						       method: 'GET',
			          }).then(signupResponse => {
			                 return signupResponse.json();
			          }).then((signupJson) => {
			        	if(!signupJson.error)
		        			     dispatch(setSignupSuccess(username,password,signupJson));
		        		else
		        			     dispatch(setSignupError(signupJson.error));
			        })
			       }

	        })
	        .catch(err => {
	            throw err;
	        });
	    }
	}
	else{
		return dispatch => {
			dispatch(setSignupError('Please enter details properly.'));
		}
	}
}

export function setSignupPending(isSignupPending) {
  return {
    type: types.SET_SIGNUP_PENDING,
    isSignupPending
  };
}

export function setSignupSuccess(username,password,response) {
  return {
    type: types.SET_SIGNUP_SUCCESS,
    isSignupSuccess:true,
    password:password,
    username:username,
  };
}

export function setSignupError(error) {
  return {
    type: types.SET_SIGNUP_ERROR,
    signupError:error
  }
}


export default function reducer(state = {
  isSignupSuccess: false,
  isSignupPending: false,
  signupError: null,
}, action) {
  switch (action.type) {
    case types.SET_SIGNUP_PENDING:
      return Object.assign({}, state, {
        isSignupPending: action.isSignupPending
      });

    case types.SET_SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isSignupSuccess: action.isSignupSuccess,
        userData:{email:action.username,password:action.password},
      });

    case types.SET_SIGNUP_ERROR:
      return Object.assign({}, state, {
        signupError: action.signupError
      });    


    default:
      return state;
  }
}
