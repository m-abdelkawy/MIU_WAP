$(function(){
    $("#target").on("mouseover", showCoordinates);
})

function showCoordinates(evt){
    $("#target").html(
        `page: (${evt.pageX}, ${evt.pageY})\nscreen: (${evt.screenX}, ${evt.screenY})\nclient: (${evt.clientX}, ${evt.clientY})`
    );
}