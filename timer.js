function startTimer(duration, display) {
    var timer = duration;
    var minutes;
    var seconds;

    var timeInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

function myFunction() {
    var fiveMinutes = 60 * 0.1;
    var display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
}

function showEdit() {
    var label = document.getElementById('some-label');
    var text = document.getElementById('some-text');

    label.style.display = "none";
    text.style.display = "block";

}

function hideEdit() {
    var label = document.getElementById('some-label');
    var text = document.getElementById('some-text');

    label.style.display = "block";
    text.style.display = "none";
}

window.onload = function () {
    var fiveMinutes = 60 * 0.1;
    var display = document.querySelector('#time');
    // startTimer(fiveMinutes, display);
};