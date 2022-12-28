import {Simulate} from "react-dom/test-utils";
import copy = Simulate.copy;

type UserType1 = {
    name: string
    hair: number
    address: {
        title: string
    }
    laptop: {
        title: string
    }
}

type UserWithBooksType = UserType1 & {
    books: string[]
}

type CompanyType = {
    companies: { id: number, title: string }[]
}

const hairdresser = (u: UserType1, length: number) => {

    return {
        ...u,
        hair: u.hair / length
    }
}

test('change hair', () => {
    let user: UserType1 = {
        name: 'Oleg',
        hair: 10,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Asus'
        }
    }


    const cutUser = hairdresser(user, 2)

    expect(user.hair).toBe(10)
    expect(cutUser.hair).toBe(5)
    expect(user.address).toBe(cutUser.address)


})

test('change address title', () => {
    let user: UserType1 = {
        name: 'Oleg',
        hair: 10,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'asus'
        }
    }

    const changeAddress = (u: UserType1, title: string) => ({
        ...u,
        address: {...u.address, title: title}
    })
    const copy = changeAddress(user, 'Kiev')

    expect(user.address.title).toBe('Minsk')
    expect(copy.address.title).toBe('Kiev')
    expect(user.laptop).toBe(copy.laptop)


})

test('upgrade laptop', () => {
    let user: UserType1 = {
        name: 'Oleg',
        hair: 10,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'asus'
        }
    }

    const upgradeLaptop = (u: UserType1, title: string) => ({
        ...u,
        laptop: {...u.laptop, title: title}
    })

    const uL = upgradeLaptop(user, 'Macbook')

    expect(user.address).toBe(uL.address)
    expect(user.laptop).not.toBe(uL.laptop)
    expect(user.laptop.title).toBe('asus')
    expect(uL.laptop.title).toBe('Macbook')

})

test('', () => {
    let user: UserWithBooksType = {
        name: 'Oleg',
        hair: 10,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'asus'
        },
        books: ['html', 'css', 'react', 'math', 'dune']
    }
    const changeAddress = (u: UserWithBooksType, title: string) => ({
        ...u,
        address: {...u.address, title: title}
    })

    const copy = changeAddress(user, 'Kiev')

    expect(user.address.title).toBe('Minsk')
    expect(copy.address.title).toBe('Kiev')
    expect(user.laptop).toBe(copy.laptop)
    expect(user.books).toBe(copy.books)


})

test('add books', () => {
    let user: UserWithBooksType = {
        name: 'Oleg',
        hair: 10,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'asus'
        },
        books: ['html', 'css', 'react', 'math', 'dune']
    }
    const addBook = (u: UserWithBooksType, books: string[]) => ({
        ...u,
        books: [...u.books.concat(books)]
    })

    const copy = addBook(user, ['ts', 'c++'])


    expect(copy.books.length).toBe(7)
    expect(user.books.length).toBe(5)
    expect(user.laptop).toBe(copy.laptop)
    expect(user.address).toBe(copy.address)


})


test('update books', () => {
    let user: UserWithBooksType = {
        name: 'Oleg',
        hair: 10,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'asus'
        },
        books: ['html', 'css', 'react', 'js', 'dune']
    }
    const updateBooks = (u: UserWithBooksType, book: string) => ({
        ...u,
        books: [...u.books.map(b => b === 'js' ? book : b)]
    })

    const copy = updateBooks(user, 'ts')


    expect(copy.books.length).toBe(5)
    expect(user.books.length).toBe(5)
    expect(user.books[3]).toBe('js')
    expect(copy.books[3]).toBe('ts')

})

test('remove books', () => {
    let user: UserWithBooksType = {
        name: 'Oleg',
        hair: 10,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'asus'
        },
        books: ['html', 'css', 'react', 'js', 'dune']
    }
    const removeBook = (u: UserWithBooksType, book: string) => ({
        ...u,
        //books: [...u.books.filter(b => b === book ? '' : b)]
        books: [...u.books.filter(b => b !== book)]
    })

    const copy = removeBook(user, 'js')


    expect(copy.books.length).toBe(4)
    expect(user.books.length).toBe(5)
    expect(user.books[3]).toBe('js')
    expect(copy.books[3]).toBe('dune')

})


test('add company', () => {

    let user: UserWithBooksType & CompanyType = {
        name: 'Oleg',
        hair: 10,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'asus'
        },
        books: ['html', 'css', 'react', 'js', 'dune'],
        companies: [
            {id: 1, title: 'NASA'},
            {id: 2, title: 'SpaceX'},
            {id: 3, title: 'Apple'},
            {id: 4, title: 'Microsoft'},

        ]
    }

    const addCompany = (u: UserWithBooksType & CompanyType, c: { id: number, title: string }) => ({
        ...u,
        companies: [...u.companies, c]
    })

    const copy = addCompany(user, {id: 5, title: 'Yandex'})

    expect(user.companies.length).toBe(4)
    expect(copy.companies.length).toBe(5)
    expect(copy.companies[4].id).toBe(5)
    expect(copy.companies[4].title).toBe('Yandex')

})


test('upgrade company', () => {

    let user: UserWithBooksType & CompanyType = {
        name: 'Oleg',
        hair: 10,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'asus'
        },
        books: ['html', 'css', 'react', 'js', 'dune'],
        companies: [
            {id: 1, title: 'NASA'},
            {id: 2, title: 'SpaceX'},
            {id: 3, title: 'Apple'},
            {id: 4, title: 'Microsoft'},

        ]
    }

    const upgradeCompany = (u: UserWithBooksType & CompanyType, title: string) => ({
        ...u,
        companies: u.companies.map(c => c.title === 'SpaceX' ? {...c, title} : c)
    })

    const copy = upgradeCompany(user, 'XspacE')

    expect(user.companies[1].title).toBe('SpaceX')
    expect(copy.companies[1].title).toBe('XspacE')


})

test('upgrade company', () => {

    let user: UserWithBooksType = {
        name: 'Oleg',
        hair: 10,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'asus'
        },
        books: ['html', 'css', 'react', 'js', 'dune'],

    }

    let companies = {
        'Oleg': [
            {id: 1, title: 'NASA'},
            {id: 2, title: 'SpaceX'},
            {id: 3, title: 'Apple'},
            {id: 4, title: 'Microsoft'},

        ]
    }

    const upgradeCompany = (companies: { [key: string]: { id: number, title: string }[] }, title: string) => {
        let copyCompany = {...companies}
        copyCompany['Oleg'] = copyCompany['Oleg'].map(c => c.title === 'SpaceX' ? {...c, title} : c)

        return copyCompany
    }



    const copyCompany = upgradeCompany(companies, 'XspacE')

    expect(companies['Oleg'][1].title).toBe('SpaceX')
    expect(copyCompany['Oleg'][1].title).toBe('XspacE')
    expect(companies['Oleg']).not.toBe(copyCompany['Oleg'])


})
