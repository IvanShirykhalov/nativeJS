import {CityType} from "../02/02.test";
import {addMoneyToBudget, greetingMessage, repairHouse, toStuff} from "./03_02";

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


test('Budget should be changed for government buildings', () => {

    addMoneyToBudget(city.governmentBuilding[0], 1000000)
    addMoneyToBudget(city.governmentBuilding[1], -1000000)

    expect(city.governmentBuilding[0].budget).toBe(3000000)
    expect(city.governmentBuilding[1].budget).toBe(4000000)

})

test('Houses should be repared', () => {
    repairHouse(city)

    expect(city.houses[0].repaired).toBe(true)
    expect(city.houses[1].repaired).toBe(false)
})

test('staff should be changed',()=>{

    toStuff(city.governmentBuilding[0], 20)
    toStuff(city.governmentBuilding[1], -20)

    expect(city.governmentBuilding[0].staffCount).toBe(220)
    expect(city.governmentBuilding[1].staffCount).toBe(980)

})

test('Greeting message should be correct for city', ()=>{


    expect(greetingMessage(city)).toBe('Hello New York citizens. I want you be happy. All 1000000 people')
})