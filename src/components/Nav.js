import React    from 'react';
import { Link } from 'react-router';
import _        from 'lodash';

import { connect } from 'react-redux';
import * as authActions  from '../reducers/Login';
import { bindActionCreators } from 'redux'
import * as pagesActions from '../reducers/Pages';

class NavHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          user_email: localStorage.getItem('user_email'),
        }
        this.props.pagesActions.getPages();
    }
    logout() {
        this.props.authActions.logout();
    }

    componentWillReceiveProps(nextProps) {

        if((this.props.user.email) !== (nextProps.user.email)) 
        {
               this.render();
        }
    }
    render() {
        let allPages = (this.props.pages)?this.props.pages:[];
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]);
        let user_email='';

        if(this.props.user.email && this.props.user.email != 'undefined')
            user_email = this.props.user.email
        else
            user_email = localStorage.getItem('user_email');

        return (

            <header className='navbar-wrapper'>
            
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
                            {/*<li>
                                <Link className="navbar-link" to='/blogs'>Blog</Link>
                            </li>  */}
                            {(user_email!=null && user_email!='undefined')?
                            <li>
                                <Link className="navbar-link" to='/profile'>{user_email}</Link>
                            </li> :''}
                            <li>
                            
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
  return {
    user: state.login.userData,
    pages: state.pages.allPages
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    //login: (email, password) => dispatch(login(email, password))
    authActions: bindActionCreators(authActions, dispatch),
    pagesActions: bindActionCreators(pagesActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);