import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzime';
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {

    test('Debe mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola soy Goku'; 
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> ); 

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola soy Goku';
        const subTitulo = 'Soy un subtitulo';  
        
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo } 
                subtitulo={ subTitulo } 
            /> );  
        
        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);
    });
});
