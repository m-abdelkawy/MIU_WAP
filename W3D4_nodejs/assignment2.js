const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum = 0;

function getNumber() {
    readline.question("Enter number: ", num => {
        if (num === "stop") {
            console.log(sum);
            return readline.close();
        }
        else {
            sum += parseInt(num);
        }
        getNumber();
    });
}

getNumber();