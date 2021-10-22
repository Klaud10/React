import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleLogin = (  ) => {
        history.replace('/home')
    }; 

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Log in
            </button>
        </div>
    )
}