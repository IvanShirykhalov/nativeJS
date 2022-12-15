type UsersType = {
    [key: string]: { id: number, name: string }
}
let users: UsersType
beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Oleg'},
        '11323': {id: 11323, name: 'Igor'},
        '123214': {id: 123214, name: 'Valera'},
        '4214124': {id: 4214124, name: 'Katya'},
    }
})
test('should update corresponding user', () => {

    users["101"].name = 'Gelo'

    expect(users['101'].name).toBe('Gelo')
    expect(users[123214].name).toBe('Valera')
})

test('should delete corresponding user', () => {

    delete users['101']

    expect(users['101']).toBeUndefined()

})