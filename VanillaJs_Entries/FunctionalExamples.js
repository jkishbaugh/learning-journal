const customers = [
    {
        name: 'George of Jungle',
        orders: [
            {itemName:'banana', amount:5, total: 7.50},
            {itemName:'vines', amount: 10, total: 35.60},
            {itemName:'englishBook', amount:1, total:22.00}
        ]
    },
    {
        name:'Mary Poppins',
        orders:[
            {itemName: 'chalk', amount: 3, total: 10.00},
            {itemName: 'umbrella', amount:1, total: 12.50}
        ]
    }
]

const pets = [
    {name:'Brutus', species: 'dog'},
    {name: 'Malfoy', species: 'snake'},
    {name:'Spot', species: 'dog'},
    {name: 'Mr. Purrs', species: 'cat'},
    {name:'Bubbles', species: 'fish'},
    {name: 'Bunnicula', species: 'rabbit'},
]

//filter
const allDogs = pets.filter(pet => pet.species==='dog')
console.log(allDogs);

//map
const petNames = pets.map(pet => pet.name)
console.log(petNames)