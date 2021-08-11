$(() => {
    $('.btn').click(function (event) {
        let id = parseInt(event.target.value);
        $.get({
            url: `/computers/${id}`,
            contentType:"application/json; charset=utf-8"
        }).done(function (data, status) {
            data = JSON.parse(data);
            $('#td1').text(data['cpu']);
            $('#td2').text(data['ram']);
            $('#td3').text(data['storage']);
            $('#td4').text(data['price']);
        }).fail(function () {
            console.log("failed to get data!");
        });
    });
});