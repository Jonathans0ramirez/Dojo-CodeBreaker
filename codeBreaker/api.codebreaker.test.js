const request = require("supertest");
const api = require('../app')

describe('testing /api/codebreaker/guess path', () => {
    test("it should return status code 200", done => {
        request(api)
            .get("/api/codebreaker/guess/1234") // Act
            .then(response => {
                expect(response.statusCode).toBe(200); //Assert
                done();
            });
    });
    test("it should return text/html content.type", done => {
        request(api)
            .get("/api/codebreaker/guess/1234") // Act
            .then(response => {
                expect(response.type).toBe("text/html");
                done();
            });
    });

    test("it should return a valid text response", done => {
        request(api)
            .get("/api/codebreaker/guess/1234") // Act
            .then(response => {
                expect(response.text).not.toBeNull();
                expect(response.text).not.toBeUndefined();
                done();
            });
    });

    test("it should return a correct answer", done => {
        request(api)
            .get("/api/codebreaker/guess/1234") // Act
            .then(response => {
                expect(response.text).toContain("xxxx");
                done();
            });
    });
})

describe('testing /api/codebreaker/setSecret path', () => {
    test("it should return status code 200", done => {
        request(api)
            .get("/api/codebreaker/setSecret/4321") // Act
            .then(response => {
                expect(response.statusCode).toBe(200); //Assert
                done();
            });
    });
    test("it should return text/html content.type", done => {
        request(api)
            .get("/api/codebreaker/setSecret/4321") // Act
            .then(response => {
                expect(response.type).toBe("text/html");
                done();
            });
    });

    test("it should return a confirmation", done => {
        request(api)
            .get("/api/codebreaker/setSecret/4321") // Act
            .then(response => {
                expect(response.text).toContain("Nuevo secreto: 4321");
                done();
            });
    });
})