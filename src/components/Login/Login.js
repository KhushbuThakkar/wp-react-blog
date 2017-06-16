import React        from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './LoginForm.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signupVisible:false,
        };
    }

    onLoginClick() {
        console.log('onLoginClick called');
        this.setState({
          signupVisible: false,
        })
    }
    render() {
        console.log(this.state.signupVisible,'signupVisible');
        return (
            <div className='col-md-12 container'>   

			
	            <div className='col-md-12 text-center card'>   
		            
                    {(this.state.signupVisible)?
                        <div>
                            <h2 className='text-center'>Signup</h2>
                            <SignupForm  onLoginClick={this.onLoginClick.bind(this)}/>
                        </div>
                        :
                        <div>
                            <h2 className='text-center'>Login</h2>
                            <LoginForm/>
                            <div>Haven't registered yet?<a onClick={e => this.setState({signupVisible: true})}>Sign up</a></div>
                        </div>
                    }
                 </div>	            
{/*}
                <div className='col-md-6 text-center card'>   
	                <h2 className='text-center'>Signup</h2>
	                 <SignupForm />
                 </div>
             */}

            </div>
        );
    }

}
export default Login;
