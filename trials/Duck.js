class Duck {
    constructor() {
        this.flying = false;
        this.quaking = false;
        this.xPos = 0;
        this.yPos = 0;
    }

    takeOff() {
        this.flying = true;
    }

    land() {
        this.flying = false;
    }

    startQuaking() {
        this.quaking = true;
    }

    stopQuaking() {
        this.quaking = false;
    }

    moveTo(x, y) {
        this.xPos = x;
        this.yPos = y;
        let output = "Duck is ";
        output += this.flying === true ? `flying to ` : `swimming to `;
        output += `${this.xPos}, ${this.yPos}`;
        if (this.quaking === true) {
            output += " while quaking";
        }
        console.log(output);
    }
}

module.exports = Duck;