const increaseUser = (user: UserType) => {
    user.age++
}
type UserType = { name: string, age: number, address: { title: string } }

test('Reference type test', () => {
    let user: UserType = {
        name: 'Oleg',
        age: 23,
        address: {
            title: 'Omsk'
        }
    }
    increaseUser(user)

    expect(user.age).toBe(24)

    const newUser = user
    newUser.age = 1000

    expect(user.age).toBe(1000)
})

test('Array reference test', () => {
    const users: UserType[] = [
        {name: 'Igor', age: 20, address: {title: 'Omsk'}},
        {name: 'Dima', age: 30, address: {title: 'Kiev'}},
    ]

    const newArray = users
    newArray.push({name: 'Vova', age: 35, address: {title: 'Sochi'}})

    expect(users.length).toBe(3)
    expect(newArray.length).toBe(3)

    expect(users[2].name).toBe('Vova')
    expect(newArray[2].name).toBe('Vova')

})

test('value type test', () => {
    let value = 100
    let newValue = value

    expect(newValue).toBe(100)


})

test('Reference type test', () => {
    let user: UserType = {
        name: 'Oleg',
        age: 23,
        address: {
            title: 'Omsk'
        }
    }

    let newAddress = user.address
    newAddress.title = 'Moscow'

    expect(user.address.title).toBe('Moscow')
})

test('Reference type array test', () => {
    let user: UserType = {
        name: 'Oleg',
        age: 23,
        address: {
            title: 'Omsk'
        }
    }

    let user2: UserType = {
        name: 'Igor',
        age: 25,
        address: user.address
    }

    const users: UserType[] = [user, user2, {name: 'Gleb', age: 27, address: user2.address}]
    const superUsers = [user, user2]

    superUsers[0].name = 'Olegg'

    expect(user.name).toBe('Olegg')
    expect(users[0].name).toBe('Olegg')
    expect(superUsers[0].name).toBe('Olegg')
})