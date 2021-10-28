import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';


export const Navbar = () => {

    const { user:{name}, dispatch } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {

        history.replace('/login');

        dispatch ({
            type: types.logout
        });
    }; 

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <div className="container-fluid">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Home
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/dc"
                        >
                            DC
                        </NavLink>
                        
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto ">

                        <span className="collapse navbar-collapse nav-item nav-link text-info">
                            { name }
                        </span>

                        <button 
                            className="collapse navbar-collapse nav-item nav-link btn"
                            onClick={ handleLogout } 
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}