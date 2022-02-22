/*
    CheckingAccount (ahorros)
    SpecialAccount (corriente)

    balance
    deposit()
    withdraw()

    Checking account has to leave at least 10k, if trying to withdraw more should show me an error message
    SpecialAccount deposits has 1% fee, and can also have negative balance when withdrawing. ***quita 1%
*/

class Account {
    constructor() {
        this.balance = 0;
    }

    deposit(inflow){
        //if (inflow >= 0){
        this.balance += inflow;
        console.log(`You deposit ${inflow} and your new balance is ${this.balance}`)     
    }
    withdraw(outflow){
        this.balance -= outflow;
    }
}

// Checking account has to leave at least 10k, if trying to withdraw more should show me an error message

class CheckingAccount extends Account {
    constructor(number){
        super();
        this.number = number;
    }

    deposit(inflow) {
        super.deposit(inflow);
    }
    withdraw(outflow) {
        super.withdraw(outflow);
        if (this.balance < 10000){
            this.balance +=outflow;
            console.log(`Error, this withdrawal ${outflow} cannot be made because it exceeds your balance ${this.balance}`)
        } else {
            console.log(`You withdraw ${outflow} and your new balance is ${this.balance}`)
        }
    }
}

var accountC = new CheckingAccount(321456);
console.log(accountC);
accountC.deposit(10000);
accountC.deposit(200000);
accountC.withdraw(5000);
accountC.withdraw(250000);

//SpecialAccount deposits has 1% fee, and can also have negative balance when withdrawing. ***quita 1%

class SpecialAccount extends Account {
    constructor(number){
        super();
        this.number = number;
    }

    deposit(inflow) {
        super.deposit(inflow);
    }

    withdraw(outflow) {
        super.withdraw(outflow);
        console.log(`You withdraw ${outflow} and your new balance is ${this.balance}`)  
        if (outflow > this.balance)  {
            console.log("OMG you're overdrawn")
        }
    }
}

var accountD = new SpecialAccount(963852);
console.log(accountD);
accountD.deposit(10000);
accountD.deposit(200000);
accountD.withdraw(5000);
accountD.withdraw(250000);