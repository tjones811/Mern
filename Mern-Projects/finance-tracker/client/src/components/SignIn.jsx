import React from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const SignIn = props => {
    const {setLoggedIn} = props;
    return(
        <>
            <div>
                <h1>Sign in below via Registration or Login</h1>
                <div className="row">
                    <div className="col">
                        <RegistrationForm setLoggedIn={setLoggedIn}></RegistrationForm>
                    </div>
                    <div className="col">
                        <LoginForm></LoginForm>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;