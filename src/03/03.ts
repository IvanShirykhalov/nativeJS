import {StudentType} from "../02/02";

export const addSkill = (student: StudentType, skill: string) => {
    return student.technologies.push({id: new Date().getTime(), title: skill})
}

export const madeActive = (student: StudentType, activity: boolean) => {
    return student.isActive = activity
}

export const studentCity = (student: StudentType, city: string) => {
    return student.address.city.title === city
}