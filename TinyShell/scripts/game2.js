/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 9/8/12
 * Time: 11:29 AM
 * To change this template use File | Settings | File Templates.
 */


(function() {

    var Game = function() {
        var d = '0.5s';
        var self = {
            shells: document.querySelectorAll('.shell'),
            positions: [ {idx: 0, x: 0}, { idx:1, x:90}, {idx:2,x:180} ],
            transformations: [
                function() { self.swap(0, 1) },
                function() { self.swap(0, 2) },
                function() { self.swap(1, 2) }
            ]
        };

        self.swap = function(i1, i2) {
            console.dir(self.positions);
            var p  = self.positions[i1].idx;
            self.positions[i1].idx = self.positions[i2].idx;
            self.positions[i2].idx = p;

            var s1 = self.shells[self.positions[i1].idx];
            var s2 = self.shells[self.positions[i2].idx];

            move(s1).x(self.positions[i1].x).duration(d).end();
            move(s2).x(self.positions[i2].x).duration(d).end();
        };
        self.init = function() {
            for ( var i= 0, len=self.shells.length; i < len; i++ ) {
                self.shells[i].addEventListener('click', function( ev ) {
                    self.checkRound( ev.target );
                });
            }
            document.querySelector('.ball').style.visibility = 'hidden';
            self.shuffle();
        };

        self.shuffle = function() {
            var count = 4;
            var next = function f( ) {
                var r = Math.floor(Math.random() * self.transformations.length);
                self.transformations[r]();

                if ( count-- > 0 ) {
                    setTimeout(f, 500);
                }
            };

            setTimeout(next, 0);

        };

        self.checkRound = function( selected_shell ) {
            var classes = selected_shell.getAttribute('class');
            if ( classes.match(/\bwinner\b/) ) {
                var ball = document.querySelector('.ball');
                ball.style.visibility = 'visible';
                selected_shell.setAttribute('class', classes + ' flash-up-down');
                setTimeout(function() {
                    selected_shell.setAttribute('class', classes);
                    ball.style.visibility = 'hidden';
                }, 2000);

            } else {
                alert('loose');
            }
        };

        return self;
    }


    var game = new Game();
    var start_btn = document.querySelector('#btn-start');

    game.init();

    window.game = game;
    start_btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        game.shuffle();
    });


}());
