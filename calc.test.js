const calc = require("./calc");

test("Sanity check", () => {
    expect(1).toBe(1);
});

test("Sum returns 3 arguments 1 and 2", () => {
    expect(calc.sum(1, 2)).toBe(3);
    //expect(calc.sum(1, 2)).toBe(expect.any(Number));
    //expect(typeof calc.sum(1, 2)).toBe("number");
});

test("Sub returns 3 arguments 3 and 2", () => {
    expect(calc.sum(3, 2)).toBe(1);
});