import {createGM, getStreetsTitleOfHouses, govBildStreets, ManType} from "./05";
import exp from "constants";
import {CityType} from "../02/02.test";

let people: ManType[]
beforeEach(() => {
    people = [
        {name: 'Igor Ivanov', age: 23},
        {name: 'Vasya Sidorov', age: 25},
        {name: 'Vanya Andreev', age: 18},
        {name: 'Oleg Petrov', age: 31},
    ]

})
test('should get array of greeting messages', () => {
    const messages = people.map(m => `Hello ${m.name.split(' ')[0]}. Welcome to ...`)

    expect(messages[0]).toBe(`Hello Igor. Welcome to ...`)
})


let city: CityType
beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'WhiteStreet'
                    },
                },
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'HappyStreet'
                    },
                },
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'HappyStreet'
                    },
                },
            },

        ],
        governmentBuilding: [{
            type: 'HOSPITAL',
            budget: 2000000,
            staffCount: 200,
            address: {
                number: 100,
                street: {
                    title: 'CentralStreet'
                }
            }
        },
            {
                type: 'FIRE-STATION',
                budget: 5000000,
                staffCount: 1000,
                address: {
                    number: 101,
                    street: {
                        title: 'SouthStreet'
                    }
                }
            },
        ],
        citizenNumber: 1000000
    }
})


test('list of street title of government buildins', () => {

    let streetsName = govBildStreets(city.governmentBuilding)

    expect(streetsName.length).toBe(2)
    expect(streetsName[0]).toBe('CentralStreet')
})

test('list of streets title', () => {

    let streetsName = getStreetsTitleOfHouses(city.houses)

    expect(streetsName.length).toBe(3)
    expect(streetsName[0]).toBe('WhiteStreet')
    expect(streetsName[1]).toBe('HappyStreet')
    expect(streetsName[2]).toBe('HappyStreet')

})

test('create messages for streets', ()=>{
    let gm = createGM(city.houses)

    expect(gm.length).toBe(3)
    expect(gm[0]).toBe(`Hello citizens for WhiteStreet.`)
    expect(gm[1]).toBe(`Hello citizens for HappyStreet.`)
    expect(gm[2]).toBe(`Hello citizens for HappyStreet.`)
})