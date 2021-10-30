import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './SignIn.css';
import signInImg from '../../images/signin.png'
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const SignIn = () => {
    const { error, setError, user, setUser, setEmail, setIsLoading, setPassword, signInUsingGoogle, signInUsingEmailPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectURL = location.state?.from || '/'

    // Handle Sign in Using google
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

    // Handle Sign in using email and password
    const handleEmailSignIn = () => {
        signInUsingEmailPassword()
            .then(result => {
                setUser(result.user)
                history.push(redirectURL)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false))

    }

    // get email from user
    const getEmail = e => {
        setEmail(e.target.value)
    }
    // get password from user
    const getPassword = e => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <div className="row mx-3 d-flex align-items-center">
                <div className="col-12 col-md-6">
                    <h1 className="text-success text-center">User Email Test: {user?.email}</h1>
                    <h1 className="primary-text fw-bold text-center">Sign In</h1>
                    <div className="w-50 mx-auto">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email Address <br /> <span className="demo-font">(Demo Email: munim@gmail.com)</span></label>
                            <input type="email" onBlur={getEmail} className="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password <br /><span className="demo-font">(Demo Pass: 123456)</span></label>

                            <input type="password" onBlur={getPassword} className="form-control shadow-none" id="exampleInputPassword1" />
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <small className="">New member? <Link to="/sign-up" className="text-decoration-none">Sign Up</Link> here.</small>
                            <small><Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link></small>
                        </div>
                        <h6 className="text-danger">{error}</h6>
                        <div className="text-center mt-4">
                            <button type="submit" onClick={handleEmailSignIn} className="btn custom-btn py-2 px-3 text-white fw-bold rounded-pill shadow-none">Sign In</button>
                        </div>
                    </div>
                    <p className="text-center my-3">Or, Sign In With</p>
                    <div className="d-flex justify-content-center">
                        <div onClick={handleGoogleSignIn} className="mx-3 cursor rounded bg-google text-white py-2 px-3"><i className="pe-3 fab fa-google"></i>Google</div>
                        <div className="mx-3 rounded bg-fb text-white py-2 px-3"><i className="pe-3 fab fa-facebook-f"></i>Facebook</div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src={signInImg} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;