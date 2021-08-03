class Bank {
    static nextNumber = 0;
    constructor() {
        this._accounts = [];
    }

    getAccounts() {
        //shallow copy
        //return [...this._accounts];
        return this._accounts;
    }

    addAccount() {
        let acc = new Account(++Bank.nextNumber);
        this._accounts.push(acc);
        return acc._number;
    }

    addSavingsAccount(interest) {
        let acc = new SavingsAccount(++Bank.nextNumber, interest);
        this._accounts.push(acc);
        return acc._number;
    }

    addCheckingAccount(overdraft) {
        let acc = new CheckingAccount(++Bank.nextNumber, overdraft);
        this._accounts.push(acc);
        return acc._number;
    }

    closeAccount(number) {
        this._accounts.splice(this._accounts.indexOf(this._accounts.find(acc => acc._number === number), 1));
    }

    accountReport() {
        let res = "";
        this._accounts.forEach(acc => res += acc.toString() + "\n");
        return res;
    }

    endOfMonth() {
        let res = "";
        this._accounts.forEach(acc => res += acc.endOfMonth() + "\n");
        return res;
    }
}