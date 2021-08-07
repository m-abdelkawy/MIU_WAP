/*describe("pow", function () {

    describe("raises x to the power 2", function () {
        function makeTest(x) {
            let expected = x * x;
            it(`${x} to the power of 2 equals ${expected}`, function () {
                assert.equal(pow(x, 2), expected);
            });
        }

        makeTest(3);
        makeTest(4);
    });

    describe("raises x to the power 3", function () {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} to the power of 3 equals ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        makeTest(3);
        makeTest(4);
    });
});

describe("sum - Calculates sum of array of numbers", function () {

    it(`sum of [2,5,9] equals 16`, function () {
        assert.equal(sum([2, 5, 9]), 16);
    });

    it(`sum of [10,20,30] equals 60`, function () {
        assert.equal(sum([10, 20, 30]), 60);
    });
});

describe("multiply - Calculates product of array of numbers", function () {

    it(`product of [2,5,9] equals 90`, function () {
        assert.equal(multiply([2, 5, 9]), 90);
    });

    it(`product of [10,20,30,2] equals 12000`, function () {
        assert.equal(multiply([10, 20, 30, 2]), 12000);
    });
});

describe("reverse - reverses a string", function () {

    it(`reverse of 'Hello World' is 'dlroW olleH'`, function () {
        assert.equal(reverse('Hello World'), 'dlroW olleH');
    });

    it(`reversal of 'ahmed' is 'demha'`, function () {
        assert.equal(reverse('ahmed'), 'demha');
    });
});

describe("filterLongWords - returns words longer than i", function () {

    it(`['java', 'python', 'c++', 'csharp'] words that are longer than 3 chars are ['java', 'python', 'csharp']`, function () {
        assert.equal(JSON.stringify(filterLongWords(['java', 'python', 'c++', 'csharp'], 3)), JSON.stringify(['java', 'python', 'csharp']));
    });

    it(`['ford', 'honda', 'toyota', 'bmw'] words that are longer than 5 chars are ['toyota']`, function () {
        assert.equal(JSON.stringify(filterLongWords(['ford', 'honda', 'toyota', 'bmw'], 5)), JSON.stringify(['toyota']));
    });
});*/