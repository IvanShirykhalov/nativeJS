import {ManType} from "./Destructuring";

let man: ManType


beforeEach(() => {
    man = {
        name: 'Oleg',
        age: 29,
        lessons: [
            {title: '1'},
            {title: '2'},
        ],
        address: {
            street: {
                title: 'Novaya'
            }
        }

    }
})

test('', () => {


    const {age, lessons} = man
    const title = man.address.street.title // === const {title} = man.address.street

    expect(age).toBe(29)
    expect(lessons.length).toBe(2)
    expect(title).toBe('Novaya')
})

test('', () => {
    const [ls1, ls2] = man.lessons

  expect(ls1).toBe(man.lessons[0])

})