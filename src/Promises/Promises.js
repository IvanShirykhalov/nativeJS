import {log} from "util";

const axios = {}
const database = (id) => {

}

const promise1 = axios.get('https://google.com')
promise1
    .then((data) => {
        console.log(data)
    })

const promise2 = database(2)
promise2
    .then((user) => {
        console.log(user)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        //console.log('finish')
    })


Promise.all([promise1, promise2])
    .then((res) => {
        const dataFromGoogle = res[0]
        const user = res[1]
        console.log(`${dataFromGoogle.data} and ${user.name}`)
        console.log('finish')
    })
    .catch(() => {
        console.log('initialization failed. Try later')
    })

Promise.allSettled([promise1, promise2])
    .then((res) => {
        const dataFromGoogle = res[0].status === 'fulfilled' ? res[0].value : 'rejected'
        const user = res[1].status === 'fulfilled' ? res[1].name : 'rejected'
        console.log(`${dataFromGoogle.data} and ${user.name}`)
        console.log('finish')
        console.log('finish')
    })
    .catch(() => {
        console.log('initialization failed. Try later')
    })


const resolvedPromise = Promise.resolve('value')
console.log(resolvedPromise) //сразу зарезолвленный промис (можно использовать как заглушку если не готов бэк)

const rejectedPromise = Promise.reject({message: 'Error'})
console.log(rejectedPromise) //сразу зареджекнутый промис


const newPromise1 = database(1)


//каждый раз, когда мы вызываем then, мы создаем новый промис

const newPromise1_1 = newPromise1
    .then(() => {
    })


import axios from "axios";
import {wait} from "@testing-library/user-event/dist/utils";

const makeGoogleRequest = () => {
    return axios.get('https://google.com')
        .then(res => res.data)

}

makeGoogleRequest()
    .then(data => console.log(data))


const callBackHell = database(1)
    .then(user => {
        console.log(user)
        database(user.friend)
            .then(user => {
                console.log(user.friend)
                database(user.friend)
                    .then(usr => {
                        console.log(user.friend)
                    })
            })

    })


const analogCode = database(1)
    .then(user => {
        console.log(user)
        return user
    })
    .then(user => database(user.friend))
    .then(friend1 => {
        console.log(friend1)
        return friend1
    })
    .then(friend1 => database(friend1.friend))
    .then(friend2 => {
        console.log(friend2)
        return friend2
    })


//async await
async function run() {
    const user = await database(1)
    console.log(user)
    const friend1 = await database(user.friend)
    console.log(friend1)
    const friend2 = await database(friend1.friend)
    console.log(friend2)
}

run()


// промисификация
function getNumber() {
    return Promise.resolve(Math.random())
}


//local storage
const repo1 = {
    save(data) {
        try {
            localStorage.setItem('key', JSON.stringify((data)))
        } catch (error) {
            return false
        }
        return true
    }
}


const result1 = repo.save({name: 'xxx'})
if (result1) {
    return console.log('saved')
} else {
    return console.warn('not saved')
}

//промисификация
const repo2 = {
    save(data) {
        try {
            localStorage.setItem('key', JSON.stringify((data)))
        } catch (error) {
            return false
        }
        return true
    },
    saveAsync(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem('key', JSON.stringify((data)))
                resolve()
            } catch (error) {
                reject(error)
            }
        })
        return promise
    },
    read() {
        return new Promise((resolve, reject) => {
            const data = localStorage.getItem('key')
            if (!data) {
                resolve(null)
            } else {
                resolve(JSON.parse(data))
            }
        })
    }
}


const result2 = repo2.save({name: 'xxx'})
if (result2) {
    return console.log('saved')
} else {
    return console.warn('not saved')
}
const promise = repo2.saveAsync({name: 'yyy'})
    .then(() => console.log('saved'))
    .catch(() => console.log('not saved'))

const run2 = async () => {
    await repo2.saveAsync({name: 'yyy'})
    console.log('saved')

    const data = await repo2.read()
    console.log(data)
}


setTimeout(() => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
        setTimeout(() => {
            console.log(3)
        }, 1000)
    }, 1000)
}, 100)


function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

async function run3() {
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
}

run3()