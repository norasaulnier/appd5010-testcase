function loanCalculator (LoanAmount, InterestRate, NumberOfYears) {
    let Interest = InterestRate/5200;
    let WeeklyPayment = (Interest/(1-(1+Interest)**(-52*NumberOfYears)))*LoanAmount;

    return WeeklyPayment.toFixed(2)
}

module.exports = loanCalculator;