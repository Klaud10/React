import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleReef';

describe('Pruebas en <RealExampleRef />', () => {
    
    const wrapper = shallow( <RealExampleRef /> );

    test('debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);

    });
    
    test('Debe mostrar el componete <MultipleCustomHooks />', () => {
        
        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);
    });
});
