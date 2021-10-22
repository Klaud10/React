import React, { useMemo } from 'react'
import queryString from 'query-string'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search); 

    const [ formValues, handleInputChange] = useForm({
        searchText: q
    });
    
    const { searchText } = formValues; 

    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]);
    // const heroesFiltered = getHeroesByName( searchText ); 
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1>SerchScreen</h1>
            <hr />

            <div className="d-flex flex-wrap">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value= {searchText}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button 
                            type="submit"
                            className="btn btn-outline-primary w-100 btn-block my-2"                        
                        >Search
                        </button>
                    </form>
                </div>
                <div className="col-7" style={ { minWidth: 300 } }>
                    <h4 className="mx-3">Results</h4>
                    <hr />

                    {
                        (q ==='') && 
                            <div>
                                <img 
                                    src={ `../assets/heroes/heroes/comic-wham.png` }
                                    className="img-thumbnail animate__animated animate__bounceIn"
                                    alt="Imagen decorativa"
                                />
                            </div>
                    }
                    
                    {
                        (q !=='' && heroesFiltered.length === 0) && 
                            <div className="alert alert-danger mx-3">
                                <img 
                                    src={ `../assets/heroes/heroes/comic-boom.png` }
                                    className="img-thumbnail animate__animated animate__bounceIn"
                                    alt="Imagen decorativa"
                                />
                                There is no a Hero named {q}!!!
                            </div>
                    }

                    {
                        heroesFiltered.map( hero  => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
