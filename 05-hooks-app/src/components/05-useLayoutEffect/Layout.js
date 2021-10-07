import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../examples.css';
import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);  
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0]; 

    const pTag = useRef();
    const [boxsize, setBoxsize] = useState({})

    useLayoutEffect(() => {
        
        setBoxsize( pTag.current.getBoundingClientRect());
        
    }, [quote])

    return (
        <div>
            <h1 className="text-center"><span><b>Br</b><sup>35</sup></span>eaking <br/>
            <span className="ms-5"><b>Ba</b><sup>56</sup></span>d</h1>
            <h3>Layout Effect</h3>
            <hr></hr>
            
            <blockquote className="blockquote text-right">
                <p 
                    className="mb-2"
                    ref={ pTag }
                    > 
                    {quote} 
                </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxsize, null, 3)}    
            </pre>    

            <button 
                onClick={ increment }  
                type="button" className="btn btn-success text-wrap">
                        Siguiente frase
            </button>
        </div>
    )
}
