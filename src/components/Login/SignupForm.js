import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../reducers/LoginReducer';
import './LoginForm.css';


class SignupForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {email, password,cpassword} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
      <form name="loginForm" onSubmit={this.onSubmit}>

        {(loginError)
        ?<div className="alert alert-danger">
          <strong>Error! </strong>{loginError.message}
        </div>
        :null}

       
        <div className="form-group-collection col col-md-offset-2 col-md-10 col-sm-12 form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-2">Username</label>
            <div className="col-sm-6"> 
              <input type="text" className='form-control' placeholder='email' name="email" onChange={e => this.setState({email: e.target.value})} value={email}/>
            </div>
          </div>

          <div className="form-group">
            <label  className="control-label col-sm-2">Password</label>
            <div className="col-sm-6"> 
              <input type="password" className='form-control' placeholder='password' name="password" onChange={e => this.setState({password: e.target.value})} value={password}/>
            </div>
          </div>
          <div className="form-group">
            <label  className="control-label col-sm-2">Confirm Password</label>
            <div className="col-sm-6"> 
              <input type="password" className='form-control' name="cpassword" onChange={e => this.setState({cpassword: e.target.value})} value={password}/>
            </div>
          </div>
        </div>

        <input type="submit" value="Login" />

        <div className="message">
          { isLoginPending && <div>Please wait...</div> }
          { isLoginSuccess && <div>Success.</div> }
          
        </div>
      </form>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  console.log(state,'state error')
  return {
    isLoginPending: state.login.isLoginPending,
    isLoginSuccess: state.login.isLoginSuccess,
    loginError: state.login.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);