$(()=>{
    const clearMsg = function(){
        $('#msg').text('');
        $('#msg').attr('class', '');
    };
    const addSuccess = function(data, status){
        $('#msg').addClass('success');
        $('#msg').text('Product added successfully!');
        $('#item_count').text( 'Items in cart: ' + data);
        console.log('data');
        console.log(data);
        setTimeout(clearMsg, 1000 * 3);
    };
    const addFail = function(data, status){
        $('#msg').addClass('fail');
        $('#msg').text('Unable to reach server!');
        setTimeout(clearMsg, 1000 * 10);
    };
    const data = {
        id: $(`input[name="id"]`).val()
    };

    $("#add_form").submit(function(){
        console.log(data);
        $.post({
            url:'/products/addToCart',
            data:data
        })
        .done(addSuccess)
        .fail(addFail);

        return false;
    })
})