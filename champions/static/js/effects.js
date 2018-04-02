$(document).ready(function () {

    $("#loader").css("display", "none");

    $("#loader").fadeIn(2000);

    document.getElementById('top').onclick = function () {
        var top = document.getElementById('top');
        if (top.classList.contains('clickedLane')) {
            top.classList.remove('clickedLane');
            top.src = '../static/photos/img/topselect.png'
        } else if (document.getElementsByClassName('clickedLane')[0] == undefined) {
            top.classList.add('clickedLane');
            top.src = "../static/photos/img/topselectactive.png"
        } else {
            var prevLane = document.getElementsByClassName('clickedLane')[0];
            prevLane.classList.remove('clickedLane');
            prevLane.src = "../static/photos/img/" + prevLane.id + "select.png";
            top.classList.add('clickedLane');
            top.src = "../static/photos/img/topselectactive.png";
        }
    };

    document.getElementById('jng').onclick = function () {
        var jng = document.getElementById('jng');
        if (jng.classList.contains('clickedLane')) {
            jng.classList.remove('clickedLane');
            jng.src = '../static/photos/img/jngselect.png'
        } else if (document.getElementsByClassName('clickedLane')[0] == undefined) {
            jng.classList.add('clickedLane');
            jng.src = '../static/photos/img/jngselectactive.png'
        } else {
            var prevLane = document.getElementsByClassName('clickedLane')[0];
            prevLane.classList.remove('clickedLane');
            prevLane.src = "../static/photos/img/" + prevLane.id + "select.png";
            jng.classList.add('clickedLane');
            jng.src = '../static/photos/img/jngselectactive.png'
        }
    };

    document.getElementById('mid').onclick = function () {
        var mid = document.getElementById('mid');
        if (mid.classList.contains('clickedLane')) {
            mid.classList.remove('clickedLane');
            mid.src = '../static/photos/img/midselect.png'
        } else if (document.getElementsByClassName('clickedLane')[0] == undefined) {
            mid.classList.add('clickedLane');
            mid.src = '../static/photos/img/midselectactive.png';
        } else {
            var prevLane = document.getElementsByClassName('clickedLane')[0];
            prevLane.src = "../static/photos/img/" + prevLane.id + "select.png";
            prevLane.classList.remove('clickedLane');
            mid.classList.add('clickedLane');
            mid.src = '../static/photos/img/midselectactive.png';
        }
    };

    document.getElementById('bot').onclick = function () {
        var bot = document.getElementById('bot');
        if (bot.classList.contains('clickedLane')) {
            bot.classList.remove('clickedLane');
            bot.src = '../static/photos/img/botselect.png'
        } else if (document.getElementsByClassName('clickedLane')[0] == undefined) {
            bot.classList.add('clickedLane');
            bot.src = '../static/photos/img/botselectactive.png';
        } else {
            var prevLane = document.getElementsByClassName('clickedLane')[0];
            prevLane.src = "../static/photos/img/" + prevLane.id + "select.png";
            prevLane.classList.remove('clickedLane');
            bot.classList.add('clickedLane');
            bot.src = '../static/photos/img/botselectactive.png'
        }
    };

    document.getElementById('supp').onclick = function () {
        var supp = document.getElementById('supp');
        if (supp.classList.contains('clickedLane')) {
            supp.classList.remove('clickedLane');
            supp.src = '../static/photos/img/suppselect.png';
        } else if (document.getElementsByClassName('clickedLane')[0] == undefined) {
            supp.classList.add('clickedLane');
            supp.src = '../static/photos/img/suppselectactive.png';
        } else {
            var prevLane = document.getElementsByClassName('clickedLane')[0];
            prevLane.src = "../static/photos/img/" + prevLane.id + "select.png";
            prevLane.classList.remove('clickedLane');
            supp.classList.add('clickedLane');
            supp.src = '../static/photos/img/suppselectactive.png';
        }
    };

    document.getElementById('submitButton').onclick = function () {
        var lane = document.getElementsByClassName('clickedLane')[0];
        if (lane == undefined) {
            lane = '';
        } else {
            lane = lane.id;
        }
        var champ = document.getElementById('champSelect').value;
        var champCounter = document.getElementById('champCounter').value;
        var newUrl = 'champions/?champ=' + champ + "&lane=" + lane + "&counter=" + champCounter;
        $("#loader").fadeOut(1000, function () {
            redirectPage(newUrl);
        });

    };

    function redirectPage(location) {
        window.location = location;
    }

});