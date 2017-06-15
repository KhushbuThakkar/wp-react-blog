import React    from 'react';
import { Link } from 'react-router';
import _        from 'lodash';

import { connect } from 'react-redux';
import DataStore from './../stores/DataStore.js';
import * as authActions  from '../reducers/LoginReducer';
import { bindActionCreators } from 'redux'

class NavHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          user_email: localStorage.getItem('user_email'),
        }
    }
    logout() {
        this.props.authActions.logout();
    }
//     componentDidMount() {
//         //console.log(localStorage.getItem('user_email'),'user_email');
// //        console.log(this.props.user,'this.props.user')
//         if(this.props.user && this.props.user != 'undefined'){
//             this.setState({
//                 user_email:this.props.user.email
//             });
//         }
//         //let user_email = localStorage.getItem('user_email');
//     }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps',nextProps)

        if((this.props.user.email) !== (nextProps.user.email)) 
        {
             console.log('rendering again')
               this.render();
        }
    }
    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]);
        // var WPAPI = require( 'wpapi' );
        // var wp = new WPAPI({ endpoint: 'http://wpreact.dev/wp-json/' });

        // wp.posts().then(function( data ) {
        //     // do something with the returned posts 
        //     console.log(data,'data gathered');
        // }).catch(function( err ) {
        //     // handle error 
        // });
        let user_email='';
        console.log(this.props.user,'this.props.user')
        if(this.props.user.email && this.props.user.email != 'undefined')
            user_email = this.props.user.email
        else
            user_email = localStorage.getItem('user_email');

        return (

            <header>
            
            <nav className="navbar navbar-inverse bg-inverse navbar-static-top">
            
                <div className="container">
                    <div className="navbar-header">
                        <Link to='/' className='navbar-brand'>WP React</Link>
                    </div>
                
                    <ul className="nav navbar-nav navbar-right">
                    {allPages.map((page) => {
                        return (
                            <li key={page.id}>
                                <Link className="navbar-link" key={page.id} to={`/${page.slug}`} style={{marginRight: '10px'}}>{page.title.rendered}</Link>
                            </li>
                        )
                    })}
                            <li>
                                <Link className="navbar-link" to='/blogs'>Blog</Link>
                            </li>  
                            {(user_email!=null && user_email!='undefined')?
                            <li>
                                <Link className="navbar-link" to='/profile'>{user_email}</Link>
                            </li> :''}
                            <li>
                            {console.log(user_email,'user_email')}
                            {(user_email!=null && user_email!='undefined')
                                ?<a onClick={ this.logout.bind(this) } title="Logout"><i className="fa fa-power-off" aria-hidden="true"></i><span className="text">Logout</span></a>
                                :<Link className="navbar-link" to='/login'>Login</Link>
                            }
                            </li>  
                    </ul>
                </div>
            </nav>
          
               
            </header>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state,'user from nav')
  return {
    user: state.login.userData
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    //login: (email, password) => dispatch(login(email, password))
    authActions: bindActionCreators(authActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);