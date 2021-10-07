import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import './examples.css'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);  
    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0]; 

    return (
        <div>
            <h1 className="text-center"><span><b>Br</b><sup>35</sup></span>eaking <br/>
            <span className="ms-5"><b>Ba</b><sup>56</sup></span>d</h1>
            <hr></hr>
            {
                loading ? 
                (   
                    <div className="alert alert-info text-center">Loading...</div>   
                )
            :
                (
                    <blockquote className="blockquote text-end">
                        <p className="mb-2"> {quote} </p>
                        <footer className="blockquote-footer mt-2"> {author} </footer>
                    </blockquote>    
                )
            }

            <button 
                onClick={ increment }  
                type="button" className="btn btn-success text-wrap">
                        Siguiente frase
            </button>
        </div>
    )
}
