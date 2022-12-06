import {CityType, GovernmentBuildingType} from "../02/02.test";

const ages = [18, 20, 25, 100, 1, 50, 124, 56]
const predicate = (age: number) => {
    return age > 90
}
const oldAges = [] //больше 90
const courses = [
    {title: 'HTML', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
]
const cheapPredicate = (courses: { title: string, price: number }) => {
    return courses.price < 160
}
const cheapCourses = [
    {title: 'HTML', price: 110},
    {title: 'REACT', price: 150},
]


export const demolishHouses = (city: CityType, street: 'HappyStreet') => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const correctStaffCount = (building: GovernmentBuildingType[], staffCount: number) => {
    return building.filter(b => b.staffCount > staffCount)
}