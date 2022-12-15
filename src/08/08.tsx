import {strict} from "assert";

export const userObj = {
    '0': 'Oleg',
    '1': 'Igor',
    '2': 'Valera',
    '3': 'Katya',
}


type UsersType = {
    [key: string]: { id: number, name: string }
}
export const users: UsersType = {
    '101': {id: 101, name: 'Oleg'},
    '11323': {id: 11323, name: 'Igor'},
    '123214': {id: 123214, name: 'Valera'},
    '4214124': {id: 4214124, name: 'Katya'},
}

//user[4214124] - O(1)


const user = {id: 100500, name: 'Gleb'}
const user2 = {id: 500100, name: 'Tolya'}

users[user.id] = user
users[user2.id] = user2
delete users[user2.id] //моментально быстро O(1)


export const userArray = [
    {id: 101, name: 'Oleg'},
    {id: 11323, name: 'Igor'},
    {id: 123214, name: 'Valera'},
    {id: 4214124, name: 'Katya'}]

//userArray.find(u => u.id === 4214124) O(n)