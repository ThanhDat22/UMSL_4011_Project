import axios from 'axios';

export const getPokemon = async (pokemonId: number) => {
    try {
        const result = axios.get('https://pokeapi.co/api/v2/pokemon/1')
        return (await result).data;
    } catch (e) {
        return 'Call failed';
    }
    
}