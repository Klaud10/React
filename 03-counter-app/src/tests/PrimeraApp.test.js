import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {

    test('Debe mostrar <PrimeraApp /> correctamente', () => {
         
        const saludo = 'Hola soy Goku';
        const wrapper = shallow( <PrimeraApp saludo = {saludo} /> ); 
        
        expect (wrapper).toMatchSnapshot(); 
    });

});
