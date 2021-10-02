const { CodeBreaker } = require('./codebreaker');

let codebreaker

beforeAll(() => {
    codebreaker = new CodeBreaker("1234")
})

describe('hit', ()=>{
    test('Test 4 hit', ()=>{
        var result = codebreaker.guessNumber("1234");
        expect(result).toBe("xxxx");
    })

    test('Test 3 hit', ()=>{
        var result = codebreaker.guessNumber("1235");
        expect(result).toBe("xxx");
    })

    test('Test 2 hit', ()=>{
        var result = codebreaker.guessNumber("1295");
        expect(result).toBe("xx");
    })

    test('Test 1 hit', ()=>{
        var result = codebreaker.guessNumber("1875");
        expect(result).toBe("x");
    })

    test('Test 0 hit', ()=>{
        var result = codebreaker.guessNumber("5678");
        expect(result).toBe("");
    })
})

describe('contains', ()=>{
    test('Test 1 contain ', ()=>{
        var result = codebreaker.guessNumber("7618");
        expect(result).toMatch("-");
    })
    test('Test 2 contain ', ()=>{
        var result = codebreaker.guessNumber("7812");
        expect(result).toMatch("-");
    })
    test('Test 3 contain ', ()=>{
        var result = codebreaker.guessNumber("7412");
        expect(result).toMatch("-");
    })
    test('Test 4 contain ', ()=>{
        var result = codebreaker.guessNumber("4321");
        expect(result).toMatch("-");
    })

})

