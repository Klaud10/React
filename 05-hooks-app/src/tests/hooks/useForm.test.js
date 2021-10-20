import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm'; 

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'claudio',
        email: 'correo@correo.com'
    }; 

    test('Debe regresar un formulario por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm)); 
        const [ formValues, handleInputChange, reset ] = result.current;
        
        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
    });

    test('Debe cambiar el valor del formulario (cmabiar name)', () => {
        
        const { result } = renderHook( () => useForm(initialForm)); 
        const [ , handleInputChange ] = result.current;

        act( () => {
            
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melisa'
                }
            });
        });
        
        const [ formValues ] = result.current; 
        expect( formValues ).toEqual( { ...initialForm, name: 'Melisa' })
    });

    test('Debe restablecer el formulario con Reset', () => {
        
        const { result } = renderHook( () => useForm(initialForm)); 
        const [ , handleInputChange, reset ] = result.current;

        act( () => {
            
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melisa'
                }
            });

            reset()
        });
        
        const [ formValues ] = result.current; 
        expect( formValues ).toEqual( initialForm );
    });
});
