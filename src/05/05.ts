import {GovernmentBuildingType, HousesType} from "../02/02.test";

export type ManType = {
    name: string
    age: number
}
const people: ManType[] = [
    {name: 'Igor Ivanov', age: 23},
    {name: 'Vasya Sidorov', age: 25},
    {name: 'Vanya Andreev', age: 18},
    {name: 'Oleg Petrov', age: 31},
]
const Transformator = (man: ManType) => {
    return {
        stack: ['html', 'css', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    }
}
const devs = people.map(Transformator)
const messages = people.map(m => `Hello ${m.name.split('')[0]}, welcome to IT-INCUBATOR`)


export const govBildStreets = (gb: GovernmentBuildingType[]) => {
    return gb.map(s => s.address.street.title)
}

export const getStreetsTitleOfHouses = (h: HousesType[]) => {
    return h.map(s => s.address.street.title)
}

export const createGM = (h: HousesType[]) => {
    return h.map(gm => `Hello citizens for ${gm.address.street.title}.`)
}