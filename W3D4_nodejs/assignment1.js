const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("What is your name? ", name => {
    console.log(`Welcome ${name}`);
    readline.question("How old? ", age => {
        if (age < 16)
            console.log("You're not allowed to get a driving license!");
        else
            console.log("You are allowed to get a driving license!");

        readline.close();
    })
});