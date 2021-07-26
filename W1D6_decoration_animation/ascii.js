window.onload = function () {
    let animation = getAnimationValue();
    let frames;

    let timeInterval = 250;

    let startIntervalId;

    document.getElementById("animation").onchange = function () {
        if (startIntervalId) {
            clearInterval(startIntervalId);
            document.getElementById("stop").disabled = true;
            document.getElementById("text-area").innerHTML = "";
        }
        animation = getAnimationValue();



        switch (animation) {
            case "Blank":
                frames = null;
                break;
            case "Exercise":
                frames = getFrames(EXERCISE);
                break;
            case "Juggler":
                frames = getFrames(JUGGLER);
                break;
            case "Bike":
                frames = getFrames(BIKE);
                break;
            case "Dive":
                frames = getFrames(DIVE);
                break;
            default:
                break;
        }

        /*console.log("--------Animation--------");
        console.log(animation);
        console.log("--------Frames--------");
        console.log(frames);*/
    }

    let index = 0;
    document.getElementById("start").onclick = function () {
        if (startIntervalId) {
            clearInterval(startIntervalId);
        }
        
        document.getElementById("start").disabled = true;
        document.getElementById("animation").disabled = true;
        document.getElementById("stop").disabled = false;
        if (frames) {
            startDisplayInterval();
        }
    }

    document.getElementById("stop").onclick = function () {
        document.getElementById("stop").disabled = true;
        if (startIntervalId) {
            clearInterval(startIntervalId);
            document.getElementById("stop").disabled = true;
            document.getElementById("start").disabled = false;
        document.getElementById("animation").disabled = false;
            document.getElementById("text-area").innerHTML = "";
        }
    }

    document.getElementById("turbo").onchange = function () {
        clearInterval(startIntervalId);
        //document.getElementById("stop").disabled = true;
        //document.getElementById("text-area").innerHTML = "";
        //clearInterval(startIntervalId);
        start
        if (document.getElementById("turbo").checked) {
            timeInterval = 50;
        } else {
            timeInterval = 250;
        }
        startDisplayInterval();
    }

    document.getElementById("fontsize").onchange = function () {
        let selectedFontSize = getFontSizeSelected();
        let font_size;
        switch (selectedFontSize) {
            case "Tiny":
                font_size = "7pt";
                break;
            case "Small":
                font_size = "10pt";
                break;
            case "Medium":
                font_size = "12pt";
                break;
            case "Large":
                font_size = "16pt";
                break;
            case "Exstra Large":
                font_size = "24pt";
                break;
            case "XXL":
                font_size = "32pt";
                break;
            default:
                break;
        }
        console.log("Selected: " + selectedFontSize + ", " + font_size);
        document.getElementById("text-area").style.fontSize = font_size;
    }

    function getFrames(str) {
        return str.split("=====\n");
    }
    
    function getAnimationValue() {
        return document.getElementById("animation").value;
    }
    
    function getFontSizeSelected() {
        return document.getElementById("fontsize").value;
    }
    
    function startDisplayInterval(){
        startIntervalId = setInterval(() => {
            //console.log("i: " + index + "  arr Length: " + frames.length);
            document.getElementById("text-area").innerHTML = frames[index++];
            if (index == frames.length) { index = 0; }
    
        }, timeInterval);
    }
}
