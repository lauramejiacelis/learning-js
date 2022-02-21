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
    constructor(balance) {
        this.balance = 0;
    }

    deposit(inflow){
        //if (inflow >= 0){
        this.balance += inflow;
        console.log(`You deposit ${inflow} and your new balance is ${this.balance}`)
        
    }
    withdraw(outflow){
        this.balance -= outflow;
        console.log(`You deposit ${outflow} and your new balance is ${this.balance}`)
    }
}

// Checking account has to leave at least 10k, if trying to withdraw more should show me an error message

class CheckingAccount extends Account {
    constructor(number){
        super("balance");
        this.number = number;
    }

    deposit() {
        super.deposit();

    }
}

var account = new CheckingAccount(123456);
console.log(account);
account.deposit(10000);


//SpecialAccount deposits has 1% fee, and can also have negative balance when withdrawing. ***quita 1%

class SpecialAccount extends Account {
    constructor(number, balance){
        this.number = number;
        this.balance = 10000;
    }

    deposit() {
        super.deposit();
        
    }
}