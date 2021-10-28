import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__tittle">Register</h3>

            <form>
                <input className="auth__input" 
                    type="text"
                    placeholder="Name"
                    name="name"
                />
                <input className="auth__input" 
                    type="text"
                    placeholder="Email"
                    name="email"
                />
                <input className="auth__input" 
                    type="password"
                    placeholder="Password"
                    name="pasword"
                />
                <input className="auth__input" 
                    type="password"
                    placeholder="Confirm password"
                    name="pasword2"
                />
                
                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                    // disabled={true}
                >
                    Register
                </button>
                
                <Link to="/auth/login" 
                    className="link ">
                        Already register
                </Link>
            </form>   
        </>
    )
}
