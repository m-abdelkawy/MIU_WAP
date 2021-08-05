$(function () {
    let started = false;
    let wall_hit = false;
    let out_area = false;
    let finished = false;

    let GAMESTATUS = {
        WON: "WON",
        LOST: `LOST`,
        STARTED: "STARTED",
        WARNING: `WARNING`
    }
    let STATUSMESSAGE = {
        WON: "Congrats! YOU WON!",
        LOST: `YOU LOST THE GAME!`,
        STARTED: "GAME STARTED!",
        WARNING: `YOU HIT A WALL, CLICK "S" TO RESTART`
    }

    $("#start").on("click", startGame)

    $(".boundary").on("mouseover", hitWall)

    $("#end").on("mouseover", endGame)

    $("#maze").on("mouseleave", function(){
        out_area = true;
        endGame();
    })


    function startGame() {
        started = true;
        setStatus(GAMESTATUS.STARTED);
        wall_hit = false;
        finished = false;
        out_area = false;

        $(".boundary").removeClass("youlose");
    }

    function hitWall() {
        if(!started) return;
        $(this).addClass("youlose");
        wall_hit = true;
        setStatus(GAMESTATUS.WARNING);
    }

    function endGame() {
        if(!started) return;
        if (wall_hit || out_area) {
            setStatus(GAMESTATUS.LOST);
        } else {
            setStatus(GAMESTATUS.WON);
        }
        finished = true;
        started = false;
        wall_hit = false;
        out_area = false;
    }

    function setStatus(status) {
        $("#status").text(STATUSMESSAGE[status]);
        $("#status").removeClass();
        $("#status").addClass(status.toLowerCase());
    }
})