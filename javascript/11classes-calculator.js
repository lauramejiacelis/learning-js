class Calculator {
    constructor (number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    
    sum(){
        return this.number1 + this.number2;
    }

    res(){
        return this.number1 - this.number2;
    }

    mult(){
        return this.number1 * this.number2;
    }

    div(){
        return this.number1 / this.number2;
    }
    
}

var calcs = new Calculator(20,1);
console.log(calcs.res());
