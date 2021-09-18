const codebreaker = require('./codebreaker');

describe('hit', ()=>{
    test('Test 4 hit', ()=>{
        var result = codebreaker.run("1234","1234");
        expect(result).toMatch(/ xxxx/);
    })

    test('Test 3 hit', ()=>{
        var result = codebreaker.run("1235","1234");
        expect(result).toMatch(/ xxx/);
    })

    test('Test 2 hit', ()=>{
        var result = codebreaker.run("1295","1234");
        expect(result).toMatch(/ xx/);
    })

    test('Test 1 hit', ()=>{
        var result = codebreaker.run("1875","1234");
        expect(result).toMatch(/ x/);
    })

    test('Test 0 hit', ()=>{
        var result = codebreaker.run("5678","1234");
        expect(result).toMatch(/ /);
    })
})

describe('contains', ()=>{
    test('Test 1 contain ', ()=>{
        var result = codebreaker.run("7891","1234");
        expect(result).toMatch(/ -/);
    })

})

