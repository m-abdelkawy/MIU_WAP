String.prototype.filter = function (bad_words) {
    let strArr = this.split(" ");
    return strArr.filter(str => !bad_words.includes(str)).join(" ");
}

Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length; i++)
        for (let j = i + 1; j < this.length; j++)
            if (i < this.length - 1)
                if (this[i] > this[j]) {
                    //swap
                    let temp = this[i];
                    this[i] = this[j];
                    this[j] = temp;
                }
    return this;
}

console.log("This house is not nice!".filter(["not"]));
console.log([6, 4, 0, 3, -2, 1].bubbleSort());

var Person = function () { };
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function () {
    return this.name + ", " + this.age + " years old.";
}

/*var teacher = new Person("Ahmed", "25");
teacher.__proto__ = Person.prototype;
teacher.__proto__.teach = function(subject){
    return `${this.name} is now teaching ${subject}`;
}*/

var Teacher = function () { };
Teacher.prototype = new Person();
Teacher.prototype.teach = function (subject) {
    return `${this.name} is now teaching ${subject}`;
};

var teacher1 = new Teacher();

teacher1.initialize("Ahmed", "43");
console.log(teacher1.teach("Structural Analysis"));
