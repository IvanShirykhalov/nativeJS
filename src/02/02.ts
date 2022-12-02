type StudentAddressType = {
    streetTitle: string
    city: {
        title: string
        countryTitle: string
    }
}

type TechnologiesType = {
    id: number
    title: string
}[]

type StudentType = {
    id: number
    name: string
    isActive: boolean
    age: number,
    address: StudentAddressType
    technologies: TechnologiesType

}

const student: StudentType = {
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