import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions  from '../reducers/Login';
//import './LoginForm.css';
import { bindActionCreators } from 'redux';


class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {email, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
      <form name="loginForm" onSubmit={this.onSubmit}>
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" onChange={e => this.setState({email: e.target.value})} value={email}/>
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} value={password}/>
          </div>
        </div>

        <input type="submit" value="Login" />

        <div className="message">
          { isLoginPending && <div>Please wait...</div> }
          { isLoginSuccess && <div>Success.</div> }
          { loginError && <div>{loginError.message}</div> }
        </div>
      </form>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.authActions.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);