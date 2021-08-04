$(function () {

    let count = 0;
    let colors = ["red", "blue", "yellow", "green", "cyan", "brown", "grey"]; //7
    let ids = [];

    let interval_id;

    let btnStart = $("#btnStart");
    btnStart.click(function () {
        let width = parseInt($("input[name=txtWidth]").val());
        let growthAmount = parseInt($("input[name=txtGrowthAmount]").val());
        let growthRate = parseInt($("input[name=txtGrowthRate]").val());
        let n = parseInt($("input[name=txtNumCircles]").val());

        console.log(`${width} - ${growthAmount} - ${growthRate}`)


        for (let i = 0; i < n; i++) {
            $(".container").append($("<div>", {
                "class": "circle",
                "id": count,
                "css": {
                    "height": width + "px",
                    "width": width + "px",
                    "border-radius": "50%",
                    "background-color": colors[Math.floor(Math.random() * colors.length)],
                    "position": "absolute",
                    "left": Math.floor(Math.random() * 800)
                },
                "click": function (event) {
                    $(event.target).css("display", "none");
                    let cleanedAll = ids.map(e => $(`#${e}`).css("display") === "none" ? 0 : 1).reduce((acc, cur) => acc + cur, 0) == 0 ? true : false;
                    console.log(cleanedAll);
                    if (cleanedAll === true) {
                        /*$(".circle").css("width", width + "px");
                        $(".circle").css("height", width + "px");*/
                        $(".container").empty();
                        ids = [];
                        count = 0;
                        clearInterval(interval_id);
                        interval_id = null;
                    }
                }
            }));

            ids.push(count++);
        }
        //console.log(elementAppended);

        interval_id = setInterval(() => {
            // let elm = $(".circle");
            console.log("growthAmount: " + growthAmount);
            $(".circle").css("width", parseInt($(".circle").css("width")) + growthAmount + "px");
            $(".circle").css("height", parseInt($(".circle").css("height")) + growthAmount + "px");
        }, growthRate);

        console.log("Interval Id: " + id);
    });
});