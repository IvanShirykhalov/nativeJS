import {StudentType} from "../02/02";
import {addSkill, madeActive, studentCity} from "./03";

let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        name: 'Igor',
        age: 28,
        isActive: true,
        address: {
            streetTitle: 'Kollontai',
            city: {
                title: 'SPb',
                countryTitle: 'Russia'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'JS'
            },
            {
                id: 4,
                title: 'React'
            },
        ]
    }
})


test('new tech skill should be added', () => {

    addSkill(student, 'NodeJS')


    expect(student.technologies.length).toBe(5)
    expect(student.technologies[2].title).toBe('JS')
    expect(student.technologies[4].title).toBe('NodeJS')

})

test('student should be not active', () => {
    expect(student.isActive).toBe(true)

    madeActive(student, false)

    expect(student.isActive).toBe(false)

})

test('student lives in this city?', () => {

    let res1 = studentCity(student, 'Moscow')
    let res2 = studentCity(student, 'SPb')

    expect(res1).toBe(false)
    expect(res2).toBe(true)
})