$(document).ready(function () {


    document.getElementsByClassName("hitIt")[0].onclick = function () { // not sure if works in moz(?)
        if (document.getElementById("diamond") != undefined) {
            document.getElementById("diamond").id = "clickedDiamond";
            document.getElementsByClassName("diamondbox")[0].className = "clickedDiamondBox";
            document.getElementById('top').id = "laneselectTop";
            document.getElementById('mid').id = "laneselectMid";
            document.getElementById('jng').id = "laneselectJng";
            document.getElementById('bot').id = "laneselectBot";
            document.getElementById('supp').id = "laneselectSupp";
            document.getElementById('fill').id = "laneselectFill";
            //document.getElementById("clickedDiamond").src = "../static/photos/img/hitit.png";
            //document.getElementById("clickedDiamond").style = "margin-left: 0px; width:60%";
            //document.getElementsByClassName("clickedDiamondBox")[0].style = "width: 90%; left: 23.5%; position: absolute; bottom: 20%";
        } else {
            document.getElementById('laneselectTop').id = "top";
            document.getElementById('laneselectMid').id = "mid";
            document.getElementById('laneselectJng').id = "jng";
            document.getElementById('laneselectBot').id = "bot";
            document.getElementById('laneselectSupp').id = "supp";
            document.getElementById('laneselectFill').id = "fill";
            document.getElementById("clickedDiamond").id = "diamond";
            document.getElementsByClassName("clickedDiamondBox")[0].className = "diamondbox";
        }
    };



    for (var i = 0; i < document.getElementsByClassName('lanebutton').length; i++) {
        if (document.getElementsByClassName('lanebutton')[i].id == 'top') {
            document.getElementsByClassName('lanebutton')[i].onclick = function () {
                console.log("Clicked top");
            }
        }
    }

});