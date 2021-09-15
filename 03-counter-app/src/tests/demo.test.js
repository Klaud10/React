describe('Pruebas en el archivo demo.test.js', () => {

    test('Deben ser iguales los strings', () => {
    
    //___1-Inicialización
    const mensaje = 'Hola Mundo'; 

    //___2-Estímulo
    const mensaje2 = `Hola Mundo`;

    //___3-Observar el comportamiento
    expect( mensaje).toBe( mensaje2);
    });
});


