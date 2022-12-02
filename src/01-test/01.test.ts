import {mult, splitIntoWords, sum} from "./01";

let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test('sum should be correct', () => {


    const res1 = sum(a, b)
    const res2 = sum(a, c)

    expect(res1).toBe(3)
    expect(res2).toBe(4)
})

test('mult should be correct', () => {
    let a = 1
    let b = 2
    let c = 3

    const res1 = mult(a, b)
    const res2 = mult(a, c)

    expect(res1).toBe(2)
    expect(res2).toBe(3)
})

test('splitting into words should be correct', () => {

    const sent1 = 'hello my fiends'
    const sent2 = 'JS - the best  programming language!'

    const res1 = splitIntoWords(sent1)
    const res2 = splitIntoWords(sent2)

    expect(res1.length).toBe(3)
    expect(res1[0]).toBe('hello')
    expect(res1[1]).toBe('my')
    expect(res1[2]).toBe('fiends')

    expect(res2.length).toBe(5)
    expect(res2[0]).toBe('js')
    expect(res2[1]).toBe('the')
    expect(res2[2]).toBe('best')
    expect(res2[3]).toBe('programming')
    expect(res2[4]).toBe('language')
})