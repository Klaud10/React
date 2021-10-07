import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:''
    });

    const {name, email, password} = formValues; 

    useEffect( () => {
        console.log('E-mail cambió');
    }, [ email ]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log( formValues );
    }; 

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
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
                <label className="form-label">E-mail</label>
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
            <div className="form-group mb-3">
                <label className="form-label">Password</label>
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    );
};
