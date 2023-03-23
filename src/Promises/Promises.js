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