import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en func de Héroes', () => {
    test('debe retornar un Héroe por id', () => {
        
        const id = 1; 
        const heroe = getHeroeById(id); 

        const heroeData = heroes.find(h => h.id === id);
        
        expect(heroe).toEqual(heroeData);
    });
    
    test('debe retornar undefined si Héroe no existe', () => {
        
        const id = 10; 
        const heroe = getHeroeById(id); 
        
        expect(heroe).toBe(undefined);
    });

    //___Tarea___
    // 1.Debe retornar un arreglo con los héroes de DC
    //  .owner
    //  .toEqual al arreglo filtrado
    
    // 2.Debe retornar un arreglo con los héroes de Marvel
    //  .length = 2
    //  .toBe

    test('Debe retornar un arreglo con los héroes de DC', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner) ;

        const heroesData = heroes.filter(h => h.owner === owner); 

        expect(heroes).toEqual(heroesData);
    })
    
    test('Debe retornar un arreglo con los héroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner) ;
        
        expect(heroes.length).toBe(2);
         
    })
    

})


