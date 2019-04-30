function timer() {
    let timer;
    let count = 0;
    let ticking = false;
    $('#start-timer').on('click', function () {
        if (!ticking) {
            timer = setInterval(step, 1000);
            ticking = true;
        }
    });
    $('#stop-timer').on('click', function () {
        clearInterval(timer);
        ticking = false;
    });

    function step() {
        count++;
        $('#hours').text(("0" + `${Math.trunc(count / 3600)}`).slice(-2));
        $('#minutes').text(("0" + `${Math.trunc(count / 60) % 60}`).slice(-2));
        $('#seconds').text(("0" + `${Math.trunc(count % 60)}`).slice(-2));
    }
}
