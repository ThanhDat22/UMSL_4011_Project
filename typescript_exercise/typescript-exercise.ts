// Create an object type or interface for the following 'characters' array

/*
    RULES:
        Do not alter the character list
        "name" can be any string since they are all unique
        "faction" should only allow certain values (Jedi, Resistance, etc)
        "lightsaberColor" should only allow certain values (blue, green, etc)
        Not every character has "lightsaberColor"
        "faction" may be a single string or an array (See Han Solo)
        No criticism of the Disney trilogy except for Last Jedi
*/


// const characters = [
//     {
//         name: 'Rey',
//         faction: [ 'Jedi', 'Resistance' ],
//         episodeAppearances: [ 7, 8, 9 ],
//         lightsaberColor: [ 'blue', 'orange' ]
//     },
//     {
//         name: 'Luke Skywalker',
//         faction: [ 'Jedi', 'Rebellion' ],
//         episodeAppearances: [ 3, 4, 5, 6, 7, 8, 9 ],
//         lightsaberColor: [ 'blue', 'green' ]
//     },
//     {
//         name: 'Kylo Ren',
//         faction: [ 'Knights of Ren', 'First Order', 'Jedi' ],
//         episodeAppearances: [ 7, 8, 9 ],
//         lightsaberColor: [ 'red' ]
//     },
//     {
//         name: 'FN2187 (Finn)',
//         faction: [ 'Resistance', 'First Order' ],
//         episodeAppearances: [ 7, 8, 9 ]
//     },
//     {
//         name: 'Poe Dameron',
//         faction: [ 'Resistance', 'New Republic' ],
//         episodeAppearances: [ 7, 8, 9 ]
//     },
//     {
//         name: 'Darth Vader',
//         faction: [ 'Sith', 'Jedi', 'Republic', 'Empire' ],
//         episodeAppearances: [ 1, 2, 3, 4, 5, 6 ],
//         lightsaberColor: [ 'blue', 'red' ]
//     },
//     {
//         name: 'Han Solo',
//         faction: 'Rebellion',
//         episodeAppearances: [ 4, 5, 6, 7, 9 ]
//     },
//     {
//         name: 'Leia Organa',
//         faction: 'Rebellion',
//         episodeAppearances: [ 3, 4, 5, 6, 7, 8, 9 ],
//         lightsaberColor: [ 'blue' ]
//     }
// ]


// 1. Define the Character interface
interface Character {
    name: string;
    faction: Faction | Faction[];
    episodeAppearances: number[];
    lightsaberColor?: LightsaberColor[];
}

// 2. Define the Faction type
type Faction = 'Jedi' | 'Resistance' | 'Rebellion' | 'Knights of Ren' | 'First Order' | 'New Republic' | 'Sith' | 'Republic' | 'Empire';

// 3. Define the LightsaberColor type
type LightsaberColor = 'blue' | 'green' | 'red' | 'orange';

// 4. Assign the Character interface to the characters array
const characters: Character[] = [
    {
        name: 'Rey',
        faction: [ 'Jedi', 'Resistance' ],
        episodeAppearances: [ 7, 8, 9 ],
        lightsaberColor: [ 'blue', 'orange' ]
    },
    {
        name: 'Luke Skywalker',
        faction: [ 'Jedi', 'Rebellion' ],
        episodeAppearances: [ 3, 4, 5, 6, 7, 8, 9 ],
        lightsaberColor: [ 'blue', 'green' ]
    },
    {
        name: 'Kylo Ren',
        faction: [ 'Knights of Ren', 'First Order', 'Jedi' ],
        episodeAppearances: [ 7, 8, 9 ],
        lightsaberColor: [ 'red' ]
    },
    {
        name: 'FN2187 (Finn)',
        faction: [ 'Resistance', 'First Order' ],
        episodeAppearances: [ 7, 8, 9 ]
    },
    {
        name: 'Poe Dameron',
        faction: [ 'Resistance', 'New Republic' ],
        episodeAppearances: [ 7, 8, 9 ]
    },
    {
        name: 'Darth Vader',
        faction: [ 'Sith', 'Jedi', 'Republic', 'Empire' ],
        episodeAppearances: [ 1, 2, 3, 4, 5, 6 ],
        lightsaberColor: [ 'blue', 'red' ]
    },
    {
        name: 'Han Solo',
        faction: 'Rebellion',
        episodeAppearances: [ 4, 5, 6, 7, 9 ]
    },
    {
        name: 'Leia Organa',
        faction: 'Rebellion',
        episodeAppearances: [ 3, 4, 5, 6, 7, 8, 9 ],
        lightsaberColor: [ 'blue' ]
    }
];
