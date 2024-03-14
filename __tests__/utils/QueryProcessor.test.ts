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
});