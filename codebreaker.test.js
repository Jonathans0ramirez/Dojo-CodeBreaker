const codebreaker = require('./codebreaker');

describe('hit', ()=>{
    test('Test 4 hit', ()=>{
        var result = codebreaker.run("1234","1234");
        expect(result).toBe("xxxx");
    })

    test('Test 3 hit', ()=>{
        var result = codebreaker.run("1235","1234");
        expect(result).toBe("xxx");
    })

    test('Test 2 hit', ()=>{
        var result = codebreaker.run("1295","1234");
        expect(result).toBe("xx");
    })

    test('Test 1 hit', ()=>{
        var result = codebreaker.run("1875","1234");
        expect(result).toBe("x");
    })

    test('Test 0 hit', ()=>{
        var result = codebreaker.run("5678","1234");
        expect(result).toBe("");
    })
})

describe('contains', ()=>{
    test('Test 1 contain ', ()=>{
        var result = codebreaker.run("7618","1234");
        expect(result).toMatch("-");
    })
    test('Test 2 contain ', ()=>{
        var result = codebreaker.run("7812","1234");
        expect(result).toMatch("-");
    })
    test('Test 3 contain ', ()=>{
        var result = codebreaker.run("7412","1234");
        expect(result).toMatch("-");
    })
    test('Test 4 contain ', ()=>{
        var result = codebreaker.run("4321","1234");
        expect(result).toMatch("-");
    })

})

