var WPAPI = require( 'wpapi' );
import Globals from '../Globals';
import * as types from './actionTypes';

export function getPosts() {
  
  return dispatch => {
    dispatch(setPostsPending(true));
     var wp = new WPAPI({
        endpoint: Globals.WP_API_URL,
    });

    wp.posts().then(function( response ) {
       dispatch(setPostsPending(false));
       if (response) {
              dispatch(setPostsSuccess(response));
        } else {
            var error = new Error(response.statusText || response.status)
            error.response = response
            dispatch(setPostsError(error));
        }
    }).catch(function( err ) {
        dispatch(setPostsError(new Error('Invalid email and password')));
    });
  }
}

export function setPostsPending(isPostsPending) {
  return {
    type: types.SET_POSTS_PENDING,
    isPostsPending
  };
}

export function setPostsSuccess(response) {
  return {
    type: types.SET_POSTS_SUCCESS,
    isSuccess:true,
    posts:response,
  };
}

export function setPostsError(error) {
  return {
    type: types.SET_POSTS_ERROR,
    postsError:error
  }
}


export default function reducer(state = {
  isPostsSuccess: false,
  isPostsPending: false,
  postsError: null,
}, action) {
  switch (action.type) {
    case types.SET_POSTS_PENDING:
      return Object.assign({}, state, {
        isPostsPending: action.isPostsPending
      });

    case types.SET_POSTS_SUCCESS:
      return Object.assign({}, state, {
        isPostsSuccess: action.isPostsSuccess,
        allPosts:action.posts,
      });

    case types.SET_POSTS_ERROR:
      return Object.assign({}, state, {
        postsError: action.postsError
      });    


    default:
      return state;
  }
}