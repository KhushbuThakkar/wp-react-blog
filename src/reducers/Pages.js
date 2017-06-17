var WPAPI = require( 'wpapi' );
import Globals from '../Globals';
import * as types from './actionTypes';

export function getPagesForRoutes() {
   var wp = new WPAPI({
        endpoint: Globals.WP_API_URL,
    });
    return new Promise((resolve, reject) => {
        wp.pages().then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        }); 
    });   
}
export function getPagesXXX() {
  console.log('get pages called');
     var wp = new WPAPI({
        endpoint: Globals.WP_API_URL,
    });

    wp.pages().then(function( response ) {
       if (response) {
            console.log(response,'response returned')
            return response;
        } else {
            return 'No pages found.Create one from '+Globals.WP_URL;
        }
    }).catch(function( err ) {
        return 'error fetching posts';
    });
  
}

export function getPages() {
  
  return dispatch => {
    dispatch(setPagesPending(true));
     var wp = new WPAPI({
        endpoint: Globals.WP_API_URL,
    });

    wp.pages().then(function( response ) {
       console.log(response,'pages form getPages')
       dispatch(setPagesPending(false));
       if (response) {
              dispatch(setPagesSuccess(response));
        } else {
            var error = new Error(response.statusText || response.status)
            error.response = response
            dispatch(setPagesError(error));
        }
    }).catch(function( err ) {
        dispatch(setPagesError(new Error('Error fetching Pages')));
    });
  }
}


export function setPagesPending(isPagesPending) {
  return {
    type: types.SET_PAGES_PENDING,
    isPagesPending
  };
}

export function setPagesSuccess(response) {
  return {
    type: types.SET_PAGES_SUCCESS,
    isSuccess:true,
    pages:response,
  };
}

export function setPagesError(error) {
  return {
    type: types.SET_PAGES_ERROR,
    pagesError:error
  }
}


export default function reducer(state = {
  isPagesSuccess: false,
  isPagesPending: false,
  pagesError: null,
}, action) {
  switch (action.type) {
    case types.SET_PAGES_PENDING:
      return Object.assign({}, state, {
        isPagesPending: action.isPagesPending
      });

    case types.SET_PAGES_SUCCESS:
        console.log('SET_PAGES_SUCCESS called');
      return Object.assign({}, state, {
        isPagesSuccess: action.isPagesSuccess,
        allPages:action.pages,
      });

    case types.SET_PAGES_ERROR:
      return Object.assign({}, state, {
        pagesError: action.pagesError
      });    


    default:
      return state;
  }
}