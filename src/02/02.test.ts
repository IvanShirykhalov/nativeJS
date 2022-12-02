export type AddressType = {
    number: number
    street: {
        title: string
    }
}

export type HousesType = {
    id: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovernmentBuildingType = {
    type: 'FIRE-STATION' | 'HOSPITAL'
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: HousesType[]
    governmentBuilding: GovernmentBuildingType[]
    citizenNumber: number

}

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

test('test city should be 3 houses', () => {

    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].address.street.title).toBe('WhiteStreet')
    expect(city.houses[0].address.number).toBe(100)

    expect(city.houses[1].buildedAt).toBe(2008)
    expect(city.houses[1].address.street.title).toBe('HappyStreet')
    expect(city.houses[1].address.number).toBe(100)

    expect(city.houses[2].buildedAt).toBe(2020)
    expect(city.houses[2].address.street.title).toBe('HappyStreet')
    expect(city.houses[2].address.number).toBe(101)

})

test('test city should be 2 government building', () => {
    expect(city.governmentBuilding.length).toBe(2)

    expect(city.governmentBuilding[0].type).toBe('HOSPITAL')
    expect(city.governmentBuilding[0].budget).toBe(2000000)
    expect(city.governmentBuilding[0].staffCount).toBe(200)
    expect(city.governmentBuilding[0].address.street.title).toBe('CentralStreet')

    expect(city.governmentBuilding[1].type).toBe('FIRE-STATION')
    expect(city.governmentBuilding[1].budget).toBe(5000000)
    expect(city.governmentBuilding[1].staffCount).toBe(1000)
    expect(city.governmentBuilding[1].address.street.title).toBe('SouthStreet')
})