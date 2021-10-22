import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
        id,
        superhero,
        alter_ego,
        first_appearance,
        characters,
    }) => {
        
        return (
            <div className="card ms-3 my-2 animate__animated animate__fadeIn"  style={ { maxWidth: 540 } }>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={ `./assets/heroes/heroes/${ id }.jpg` } className="card-img" alt={ superhero } />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">SuperHeroe: { superhero }</h5>
                            <p className="card-text">Nombre: { alter_ego}</p>
                            {
                                ( alter_ego !== characters )
                                && <p className="card-text">Otros Nombres: { characters } </p>
                            }
                            <p className="card-text">
                                <small className="text-muted">Primera aparición: { first_appearance } </small>
                            </p>

                            <Link to={`./hero/${ id }`}>
                                Leer más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
