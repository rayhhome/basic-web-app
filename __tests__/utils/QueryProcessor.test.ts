import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id description', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe("Your Andrew ID is andrewc.");
    });

    test('should return sum 1', () => {
        const query = "what is 1 plus 1?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("2");
    });

    test('should return sum 2', () => {
        const query = "what is 2 plus 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("5");
    });

    test('should return larger sum 1', () => {
        const query = "what is 2 plus 3 plus 4?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("9");
    });

    test('should return larger sum 2', () => {
        const query = "what is 3 plus 4 plus 5?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("12");
    });

    test('should return difference 1', () => {
        const query = "what is 3 minus 1?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("2");
    });

    test('should return difference 2', () => {
        const query = "what is 5 minus 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("2");
    });

    test('should return largest number 1', () => {
        const query = "Which of the following numbers is the largest: 34, 54, 99?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("99");
    });

    test('should return largest number 2', () => {
        const query = "Which of the following numbers is the largest: 34, 54, 9?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("54");
    });

    test('should return product 1', () => {
        const query = "What is 2 multiplied by 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("6");
    });

    test('should return product 2', () => {
        const query = "What is 4 multiplied by 5?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("20");
    });

    test('should return power 1', () => {
        const query = "What is 2 to the power of 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("8");
    });

    test('should return power 2', () => {
        const query = "What is 4 to the power of 5?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("1024");
    });

    test('should return square and cube 1', () => {
        const query = "Which of the following numbers is both a square and a cube: 2060, 1600, 64, 3600, 435, 2668, 2197?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("64");
    });

    test('should return square and cube 2', () => {
        const query = "Which of the following numbers is both a square and a cube: 576, 4913, 2362, 361, 729, 3007, 645?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("729");
    });


    test('should return square and cube32', () => {
        const query = "Which of the following numbers is both a square and a cube: 4058, 3935, 4181, 2116, 64, 1832, 4096?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("64");
    });

    


});