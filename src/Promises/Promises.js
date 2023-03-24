function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const axios = {
    _fake(url, data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let responseData = {
                    text: `${url} loves you`
                }
                if (url.indexes(`it-kamasutra`) > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: 'we will prepare students for you'
                    }
                } else if (url.indexes(`google`) > 0) {
                    responseData = {
                        vacancies: 12
                    }
                } else if (url.indexes(`microsoft`) > 0) {
                    responseData = {
                        vacancies: 21
                    }
                }
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData
                })
            }, randomIntFromInterval(1, 5) * 1000)
        })
    }
}
const database = (id) => {
    const users = [
        {id: 1, name: 'Bogdan', friend: 1},
        {id: 2, name: 'Igor', friend: null},
        {id: 3, name: 'Oleg', friend: 2},
    ]

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = users.find(u => id === u.id)
            if (user === null) {
                return reject('user is not found')
            } else {
                return resolve(user)
            }
        }, randomIntFromInterval(500, 1500))
    })
}


/*
const promise1 = axios.get('https://google.com')
promise1
    .then((data) => {
        console.log(data)
    })

const promise2 = database(1)
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
*/


// const analogCode = database(1)
//     .then(user => {
//         console.log(user.name)
//         return user
//     })
//     .then(user => database(user.friend))
//     .then(friend1 => {
//         console.log(friend1.name)
//         return friend1
//     })
//     .then(friend1 => database(friend1.friend))
//     .then(friend2 => {
//         console.log(friend2.name)
//         return friend2
//     })
//     .catch(error => console.warn(error))


//async await
async function run() {
    try {
        const user = await database(1)
        console.log(user.name)
        let friend1
        try {
            friend1 = await database(user.friend)
            console.log(friend1.name)
        } catch (err) {
            friend1 = {name: 'Some bot', friend: 3}
        }
        const friend2 = await database(friend1.friend)
        console.log(friend2.name)
    } catch (error) {
        console.log(error)
    }
}

run()


// промисификация
// function getNumber() {
//     return Promise.resolve(Math.random())
// }

//local storage
// const repo1 = {
//     save(data) {
//         try {
//             localStorage.setItem('key', JSON.stringify((data)))
//         } catch (error) {
//             return false
//         }
//         return true
//     }
// }
//
//
// const result1 = repo.save({name: 'xxx'})
// if (result1) {
//     return console.log('saved')
// } else {
//     return console.warn('not saved')
// }

//промисификация
// const repo2 = {
//     save(data) {
//         try {
//             localStorage.setItem('key', JSON.stringify((data)))
//         } catch (error) {
//             return false
//         }
//         return true
//     },
//     saveAsync(data) {
//         const promise = new Promise((resolve, reject) => {
//             try {
//                 localStorage.setItem('key', JSON.stringify((data)))
//                 resolve()
//             } catch (error) {
//                 reject(error)
//             }
//         })
//         return promise
//     },
//     read() {
//         return new Promise((resolve, reject) => {
//             const data = localStorage.getItem('key')
//             if (!data) {
//                 resolve(null)
//             } else {
//                 resolve(JSON.parse(data))
//             }
//         })
//     }
// }


// const result2 = repo2.save({name: 'xxx'})
// if (result2) {
//     return console.log('saved')
// } else {
//     return console.warn('not saved')
// }
// const promise = repo2.saveAsync({name: 'yyy'})
//     .then(() => console.log('saved'))
//     .catch(() => console.log('not saved'))

// const run2 = async () => {
//     await repo2.saveAsync({name: 'yyy'})
//     console.log('saved')
//
//     const data = await repo2.read()
//     console.log(data)
// }
// run2()

// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//         }, 1000)
//     }, 1000)
// }, 100)


// function wait(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, ms)
//     })
// }
//
// async function run3() {
//     await wait(3000)
//     console.log(1)
//     await wait(3000)
//     console.log(2)
//     await wait(3000)
//     console.log(3)
// }
//
// run3()
