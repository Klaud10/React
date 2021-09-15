import '@testing-library/jest-dom';

import {getSaludo} from '../../base/02-template-string'


describe('Pruebas en 02-template-string.js', () => {
    
    test('getSaludo debe retornar Hola fernando!', () => {

        const nombre = 'Fernando'

        const saludo = getSaludo( nombre);   

        expect( saludo ).toBe( 'Hola ' + nombre + '!' );
        
    })
    
    //___getSaludo debe retornar Hola Claudio!, si no hay argumento nombre
    test('getSaludo debe retornar Hola Claudio!, si no hay argumento nombre', () => {
        
        const saludo = getSaludo();
        
        expect(saludo).toBe ('Hola Claudio!')
    })
    

})
