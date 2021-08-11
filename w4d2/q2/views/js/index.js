$(()=>{
    const answerSuccess = function(data, status){
        $('#msg').addClass('success');
        $('#msg').text("Data returned successfully");
        $('#answer').text(data);
        setTimeout(clearMsg, 1000 * 3);
    }

    const answerFail = function(){
        $('#msg').addClass('fail');
        $('#msg').text('Unable to reach server!');
        setTimeout(clearMsg, 1000 * 10);
    }

    const clearMsg = function(){
        $('#msg').text('');
        $('#msg').attr('class', '');
    }

    $('#ask').submit(()=> { 
        $.get({
            url:"/8ball",
            data:{question: $('#question').val()},
            contentType:"application/json; charset=utf-8"

        })
        .done(answerSuccess)
        .fail(answerFail);
        return false;
    });
})