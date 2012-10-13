

var Game = function() {
    var self = {};


};

var winner = document.querySelector('.winner');

winner.addEventListener('click', function() {
    var classes = winner.getAttribute('class');
    winner.setAttribute('class', classes + ' flash-up-down');

    setTimeout(function() {
        winner.setAttribute('class', classes);
    }, 2000);
});

var shuffle_btn = document.querySelector('#btn-start');

var swap = function(i, j) {

    move(shells[i]).x()
}

shuffle_btn.addEventListener('click', function() {
    var shells = document.querySelectorAll('.shell');
    var ball = document.querySelector('.ball');
    ball.style.visibility = 'hidden';

    move(shells[0]).x(90).end();
    move(shells[1]).x(0).end();
});


