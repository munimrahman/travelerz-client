import React from 'react';
import './SignUp.css'
import signUpImg from '../../images/signup.png'
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const { error, signInUsingGoogle, setIsLoading, setUser, setName, setUserName, setError, setEmail, setPassword, signUp } = useAuth();
    const history = useHistory();
    const redirectURL = '/'
    // get user name
    const getName = e => {
        setName(e.target.value)
    }
    // get user email
    const getEmail = e => {
        setEmail(e.target.value)
    }
    // get user password
    const getPassword = e => {
        setPassword(e.target.value)
    }

    // handle signup using google
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirectURL)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false))
    }

    // handle sign up using email and password
    const handleSignUp = () => {
        signUp()
            .then(result => {
                setUserName()
                history.push(redirectURL)
                window.location.reload()
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    return (
        <div>
            <div className="row mx-3 d-flex align-items-center">
                <div className="col-12 col-md-6">
                    <h1>user name for test</h1>
                    <h1 className="primary-text fw-bold text-center">Sign Up</h1>
                    <div className="w-50 mx-auto">
                        <div className="mb-3">
                            <label htmlFor="FullName" className="form-label">Name</label>
                            <input type="text" onBlur={getName} className="form-control shadow-none" id="Name" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" onBlur={getEmail} className="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onBlur={getPassword} className="form-control shadow-none" id="exampleInputPassword1" required />
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <small>Already member? <Link to="/sign-in" className="text-decoration-none">Sign In</Link> here.</small>
                        </div>
                        <h6 className="text-danger">{error}</h6>
                        <div className="text-center mt-4">
                            <button onClick={handleSignUp} className="btn custom-btn py-2 px-3 shadow-none text-white fw-bold rounded-pill">Sign Up</button>
                        </div>
                    </div>
                    <p className="text-center my-3">Or, Sign Up With</p>
                    <div className="d-flex justify-content-center">
                        <div onClick={handleGoogleSignIn} className="mx-3 cursor rounded bg-google text-white py-2 px-3"><i className="pe-3 fab fa-google"></i>Google</div>
                        <div className="mx-3 rounded bg-fb text-white py-2 px-3"><i className="pe-3 fab fa-facebook-f"></i>Facebook</div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src={signUpImg} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;