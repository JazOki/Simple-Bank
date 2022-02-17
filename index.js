class BankAccount {

    constructor() {
        this.Open = false;
        this.accBal=0;
    }

    open() {
        if (this.Open) {
            throw new ValueError;
        }
        this.Open=true;
    }
    

    close() {
        if (!this.Open) {
            throw new ValueError;
        }
        this.Open=false;
        this.accBal = 0;
    }
        
    

    deposit(money) {
        if(money < 0){
            throw new ValueError;
        }
        if(!this.Open){
            throw new ValueError;
        }
        this.accBal+=money;  
    }

    withdraw(money) {
        if (money < 0 || money > this.accBal) {
            throw new ValueError;
        }
        if (!this.Open) {
            throw new ValueError;
        }
        if (this.Open) {
            this.accBal-= money;
        this.accBal=this.accBal;
        }                
    }

    get balance() {
        if (!this.Open) {
            throw new ValueError;
        }
        return this.accBal;
    }
}

class ValueError extends Error {
    constructor() {
        super('Bank account error');
    }
}

module.exports = {
    BankAccount,
    ValueError
}