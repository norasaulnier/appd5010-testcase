const loanCalculator = require('./loanCalc');

test('calculates loan payment', () => {
    expect(loanCalculator(5000, 2, 10)).toBe('10.61')
})

test('calculates loan payment', () => {
    expect(loanCalculator(20000, 2, 10)).toBe('42.44')
})