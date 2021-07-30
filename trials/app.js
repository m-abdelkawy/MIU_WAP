const VALIDATOR = (function () {
    const validateFirstName = function (fname) {
        return fname === "" ? false : true;
    }
    const validateLastName = function (lname) {
        return lname === "" ? false : true;
    }
    const validate = function () {
        return validateFirstName(document.getElementById("first").value) && validateLastName(document.getElementById("last").value)
    }
    return {
        validate: validate
    }
})();

console.log(VALIDATOR.validate());
