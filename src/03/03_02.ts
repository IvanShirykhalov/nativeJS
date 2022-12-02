import {CityType, GovernmentBuildingType} from "../02/02.test";

export const addMoneyToBudget = (governmentBuilding: GovernmentBuildingType, budget: number) => {
    return governmentBuilding.budget += budget
}

export const repairHouse = (city: CityType) => {
    return city.houses[0].repaired = true
}

export const toStuff = (gb: GovernmentBuildingType, staff: number) => {
    return gb.staffCount += staff
}

export const greetingMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizenNumber} people`
}