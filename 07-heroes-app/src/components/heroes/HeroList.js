import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher( publisher ); 

    return (
        <div className="d-flex flex-wrap justify-content-around align-items-center" >
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id}
                        { ...hero }
                    />
               ))
            } 
        </div>
    )
}
