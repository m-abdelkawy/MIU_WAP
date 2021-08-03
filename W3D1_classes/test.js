describe("Account Methods testing", function () {

    describe("deposit with initial balance 0", function () {
        function makeTest(x) {
            let expected = x;
            it(`Balance after depositing ${x} equals ${expected}`, function () {
                let acc = new Account();
                acc.deposit(x);
                assert.equal(acc.getBalance(), expected);
            });
        }

        makeTest(1000);
        makeTest(2000);
    });

    describe("withdraw 1000 from balance 5000", function () {
        function makeTest(x) {
            let expected = 5000 - x;
            it(`Balance after withdrawing ${x} equals ${expected}`, function () {
                let acc = new Account();
                acc.deposit(5000);
                acc.withdraw(x);
                assert.equal(acc.getBalance(), expected);
            });
        }

        makeTest(1000);
        makeTest(2500);
        makeTest(6000);
    });

    describe("printing account using toString", function () {
        function makeTest(num, bal) {
            let expected = `Account ${num}: balance ${bal}`;
            it(`toString result: Account ${num}: balance ${bal}`, function () {
                let acc = new Account(num);
                acc.deposit(bal);
                assert.equal(acc.toString(), expected);
            })
        }

        makeTest(11, 1500);
        makeTest(12, 5000);
    })
});

describe("SavingsAccount Methods testing", function () {

    describe("Balance after deposit of Interest with initial balance of $5000", function () {
        function makeTest(interest) {
            let expected = 5000 + (interest / 100) * 5000;
            it(`Balance after depositing interest of ${interest} equals ${expected}`, function () {
                let acc = new SavingsAccount(10, interest);
                acc.deposit(5000);
                acc.addInterest();
                assert.equal(acc.getBalance(), expected);
            });
        }

        makeTest(10);
        makeTest(5);
    });

    describe("printing account using the toString method: ", function () {
        function makeTest(num, bal, interest) {
            let expected = `Account ${num}: balance ${bal}, interest ${interest}%`;
            it(`toString result: Account ${num}: balance ${bal}`, function () {
                let acc = new SavingsAccount(num, interest);
                acc.deposit(bal);
                assert.equal(acc.toString(), expected);
            })
        }

        makeTest(11, 1500, 12);
        makeTest(12, 5000, 10);
    })
});

describe("CheckingAccount Methods testing", function () {

    describe("Withdrawing from account that has overdraft of $2000 and Balance of $5000", function () {
        function makeTest(x) {
            let expected = 5000 - x;
            it(`Balance after withdrawing ${x} equals ${expected}`, function () {
                let acc = new CheckingAccount(10, 2000);
                acc.deposit(5000);
                acc.withdraw(x);
                assert.equal(acc.getBalance(), expected);
            });
        }

        makeTest(1500);
        makeTest(6500);
        makeTest(7500);
    });

    describe("printing account using the toString method: ", function () {
        function makeTest(num, bal, overdraft) {
            let expected = `Account ${num}: balance ${bal}, overdraft ${overdraft}`;
            it(`toString result: Account ${num}: balance ${bal}, overdraft ${overdraft}`, function () {
                let acc = new CheckingAccount(num, overdraft);
                acc.deposit(bal);
                assert.equal(acc.toString(), expected);
            })
        }

        makeTest(11, 1500, 2000);
        makeTest(12, 5000, 1500);
    })
});

describe("Bank class Methods testing", function () {

    describe("Adding accounts to the bank", function () {
        function makeTest(num) {
            //
            Bank.nextNumber = 0;
            let expected = num;
            let bank = new Bank();
            let numAccount;
            for (let i = 0; i < num; i++) {
                numAccount = bank.addAccount();
            }
            it(`${num} accounts added - number of the last account added ${numAccount} equals ${expected}`, function () {
                assert.equal(numAccount, expected);
            });
        }

        //makeTest(2);
        makeTest(4);
    });

    describe("Adding savings accounts to the bank that has 2 accounts initially", function () {
        function makeTest(num) {
            Bank.nextNumber = 0;
            let expected = num + 2;
            let bank = new Bank();
            let numAccount;
            for (let i = 0; i < 2; i++) {
                bank.addAccount();
            }
            for (let i = 0; i < num; i++) {
                numAccount = bank.addSavingsAccount(10);
            }
            it(`${num} savings accounts added - number of the last account added ${numAccount} equals ${expected}`, function () {
                assert.equal(numAccount, expected);
            });
        }

        //makeTest(2);
        makeTest(4);
    });

    describe("Adding checking accounts to the bank that has 2 accounts initially", function () {
        function makeTest(num) {
            Bank.nextNumber = 0;
            let expected = num + 2;
            let bank = new Bank();
            let numAccount;
            for (let i = 0; i < 2; i++) {
                bank.addAccount();
            }
            for (let i = 0; i < num; i++) {
                numAccount = bank.addCheckingAccount(2000);
            }
            it(`${num} checking accounts added - number of the last account added ${numAccount} equals ${expected}`, function () {
                assert.equal(numAccount, expected);
            });
        }

        //makeTest(2);
        makeTest(4);
    });

    describe("Deleting accounts from a list of 6", function () {
        function makeTest(num) {
            Bank.nextNumber = 0;
            let bank = new Bank();
            for (let i = 0; i < num; i++) {
                bank.addAccount();
            }

            bank.closeAccount(6);
            it(`Deletig the last account, the last number in the array is 5 equal to 
            ${bank.getAccounts()[bank.getAccounts().length - 1].getNumber()}`, function () {
                let actual = bank.getAccounts()[bank.getAccounts().length - 1].getNumber();
                let expected = 5;
                console.log("Actual: " + actual);
                console.log(bank.getAccounts());
                assert.equal(actual, expected);
            });

            //-revise with the professor
            //bank.closeAccount(5);
            /*it(`Deletig the last account again, the last number in the array is 4 equal to 
            ${bank.getAccounts()[bank.getAccounts().length - 1].getNumber()}`, function () {
                let actual = bank.getAccounts()[bank.getAccounts().length - 1].getNumber();
                let expected = 4;
                console.log("Actual: " + actual);
                console.log(bank.getAccounts());

                assert.equal(actual, expected);
            });*/
        }

        //makeTest(2);
        makeTest(6);
    });

    describe("endOfMonth testing: ", function () {
        function makeTest() {
            Bank.nextNumber = 0;
            /*let saving1 = new SavingsAccount(2, 2.5);
            saving1.deposit(5000);
            let chking1 = new CheckingAccount(3, 500);
            chking1.withdraw(100);*/

            let bank = new Bank();
            bank.addSavingsAccount(2.5);
            bank.addCheckingAccount(500);

            bank.getAccounts()[0].deposit(5000);
            bank.getAccounts()[1].withdraw(100);

            it(`result string equals`, function () {
                let expected = `Interest added SavingsAccount 1: balance: 5125 interest: 2.5\nWarning, low balance CheckingAccount 2: balance -100 overdraft limit: 500\n`
                let actual = bank.endOfMonth();
                console.log(actual);
                assert.equal(actual, expected);
            });
        }

        //makeTest(2);
        makeTest();
    });

    describe("endOfMonth testing: ", function () {
        function makeTest() {
            Bank.nextNumber = 0;

            let bank = new Bank();
            bank.addSavingsAccount(2.5);
            bank.addCheckingAccount(500);

            bank.getAccounts()[0].deposit(5000);
            bank.getAccounts()[1].withdraw(100);

            console.log(bank.accountReport());

            it(`result string equals - account report`, function () {
                let expected = `Account 1: balance 5000, interest 2.5%\nAccount 2: balance -100, overdraft 500\n`
                let actual = bank.accountReport();
                console.log(actual);
                assert.equal(actual, expected);
            });
        }

        //makeTest(2);
        makeTest();
    });
});