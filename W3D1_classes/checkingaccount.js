class CheckingAccount extends Account {
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }

    getOverdraft() {
        return this._overdraft;
    }

    setOverdraft(value) {
        this._overdraft = value;
    }

    withdraw(amount) {
        if (amount <= 0)
            throw new RangeError("Withdraw amount has to be greater than zero");
        if (amount > this._balance && amount - this._balance > this._overdraft)
            throw new Error("Can't go beyond overdraft - Insufficient funds");

        this._balance -= amount;
    }

    toString() {
        return super.toString() + `, overdraft ${this.getOverdraft()}`;
    }

    endOfMonth() {
        if (this._balance < 0) {
            return `Warning, low balance CheckingAccount ${this._number}: balance ${this._balance} overdraft limit: ${this._overdraft}`;
        }
    }
}