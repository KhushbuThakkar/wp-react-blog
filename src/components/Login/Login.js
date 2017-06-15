import React        from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './LoginForm.css';

class Login extends React.Component {

    render() {

        return (
            <div className='col-md-12 container'>   

			
	            <div className='col-md-6 text-center card border-right'>   
		            <h2 className='text-center'>Login</h2>
	                 <LoginForm />
                 </div>	            

                <div className='col-md-6 text-center card'>   
	                <h2 className='text-center'>Signup</h2>
	                 <SignupForm />
                 </div>

            </div>
        );
    }

}
export default Login;
