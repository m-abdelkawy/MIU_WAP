$(() => {
    const clearMsg = () => $("#msg").text("");
    const addedSuccess = () => {
        $("#fname").val("");
        $("#lname").val("");
        $("#arrival_time").val("");
        $("#msg").text("Data added successfully");
        $("#fname").focus();
        setTimeout(clearMsg, 3000);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#add").submit(() => {
        const data = {
            fname: $("#fname").val(),
            lname: $("#lname").val(),
            time: $("#arrival_time").val(),
            food: $("#food").val(),
        };
        $.post({
            url: "/add",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});