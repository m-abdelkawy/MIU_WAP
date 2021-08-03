class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(value) {
        this._interest = value;
    }

    addInterest() {
        this.deposit((this._interest / 100) * this.getBalance());
    }

    toString() {
        return super.toString() + `, interest ${this.getInterest()}%`;
        //"Account " + this._number + ": balance " + this._balance , interest: ${this.getInterest};
    }

    endOfMonth() {
        //let balanceAdded = (this._interest/100) * this._balance;
        this.addInterest();
        let result = `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest}`;
        return result;
    }
}