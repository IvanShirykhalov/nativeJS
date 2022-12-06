import {CityType} from "../02/02.test";
import {correctStaffCount, demolishHouses} from "./04";

test('should take old men older then 90', () => {
    const ages = [18, 20, 25, 100, 1, 50, 124, 56]

    const oldAges = ages.filter(a => a > 90)

    expect(oldAges.length).toBe(2)
    expect(oldAges[0]).toBe(100)
    expect(oldAges[1]).toBe(124)
})
test('should take only cheap courses', () => {
    const courses = [
        {title: 'HTML', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150},
    ]

    const cheapCourses = courses.filter(c => c.price < 160)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('HTML')
    expect(cheapCourses[1].title).toBe('REACT')
})
test('get only completed tasks', () => {

    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: false},
        {id: 3, title: 'Apple', isDone: true},
        {id: 4, title: 'Chocolate', isDone: true},
        {id: 5, title: 'Pasta', isDone: true},
        {id: 6, title: 'Orange', isDone: true},
    ]

    const completedTasks = tasks.filter(t => t.isDone)

    expect(completedTasks.length).toBe(4)
    expect(completedTasks[0].title).toBe('Apple')
    expect(completedTasks[3].title).toBe('Orange')

})
test('get only uncompleted tasks', () => {

    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: false},
        {id: 3, title: 'Apple', isDone: true},
        {id: 4, title: 'Chocolate', isDone: true},
        {id: 5, title: 'Pasta', isDone: true},
        {id: 6, title: 'Orange', isDone: true},
    ]

    const uncompletedTasks = tasks.filter(t => !t.isDone)

    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].title).toBe('Bread')
    expect(uncompletedTasks[1].title).toBe('Milk')

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

test('Houses should be destroyed', ()=>{

    demolishHouses(city, 'HappyStreet')

    expect(city.houses.length).toBe(1)

})

test('building with correct staff count', ()=>{
    let buildings = correctStaffCount(city.governmentBuilding, 500)

    expect(buildings.length).toBe(1)
})