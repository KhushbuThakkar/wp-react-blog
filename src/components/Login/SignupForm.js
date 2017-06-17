import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../reducers/Signup';
import './LoginForm.css';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router';

class SignupForm extends Component {

  constructor(props) {
    super(props);
    //this.props.signup('1','2');
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {email,password,cpassword,userName,displayName} = this.state;
    let {isSignupPending, isSignupSuccess, signupError} = this.props;
    if(isSignupSuccess)
      return(<div>User created successfully.You can <a onClick={this.props.onLoginClick}>login</a> now.</div>);
    else
    return (
      <form name="signupForm" onSubmit={this.onSubmit}>

        {(signupError)
        ?<div className="alert alert-danger">
          <strong>Error! </strong>{signupError}
        </div>
        :null}

       
        <div className="form-group-collection col col-md-offset-2 col-md-10 col-sm-12 form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-2">Username</label>
            <div className="col-sm-6"> 
              <input type="text" className='form-control' placeholder='Username' name="userName" onChange={e => this.setState({userName: e.target.value})} value={userName}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">Email</label>
            <div className="col-sm-6"> 
              <input type="text" className='form-control' placeholder='Email' name="email" onChange={e => this.setState({email: e.target.value})} value={email}/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">Name</label>
            <div className="col-sm-6"> 
              <input type="text" className='form-control' placeholder='Display Name' name="displayName" onChange={e => this.setState({displayName: e.target.value})} value={displayName}/>
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
              <input type="password" className='form-control'  placeholder='Retype Password' name="cpassword" onChange={e => this.setState({cpassword: e.target.value})} value={password}/>
            </div>
          </div>
        </div>

        <input type="submit" value="Sign Up" />

        <div className="message">
          { isSignupPending && <div>Please wait...</div> }
          { isSignupSuccess && <div>Success.</div> }
        </div>
      </form>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password ,userName,displayName} = this.state;
    this.props.signup(email,password ,userName ,displayName);
    this.setState({

    });
  }
}

const mapStateToProps = (state) => {
  return {
    isSignupPending: state.signup.isSignupPending,
    isSignupSuccess: state.signup.isSignupSuccess,
    signupError: state.signup.signupError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup:(email,password,userName,displayName) => dispatch(signup(email,password,userName,displayName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);