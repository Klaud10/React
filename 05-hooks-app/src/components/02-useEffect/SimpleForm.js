import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState; 

    useEffect( () => {
        // console.log('Hola!');
    }, [] );
    
    useEffect( () => {
        // console.log('formState cambió');
    }, [formState] );
    
    useEffect( () => {
        // console.log('email cambió');
    }, [email] );

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }; 

    return (
        <>
            <h1>useEffect</h1>
            { (name === 'Claudio') && <Message /> }
            <hr />
            <div className="form-group mb-3">
                <label className="form-label">Nombre</label>
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="on"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Email</label>
                <input 
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="correo@correo.com"
                    autoComplete="on"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>
        </>
    );
};
