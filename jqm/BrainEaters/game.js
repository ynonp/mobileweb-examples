/**
 * Created by JetBrains WebStorm.
 * User: ynonperek
 * Date: 3/3/12
 * Time: 7:06 PM
 * To change this template use File | Settings | File Templates.
 */

(function() {
    var COLORS = [
        'red',
        'orange',
        'blue',
        'red',
        'magenta',
        'green',
        'cyan',
        'blue',
        'cyan',
        'magenta',
        'orange',
        'green'];

    var Card = function(el, color, index) {
        var self = { is_visible: false, color: color };

        self.reveal = function() {
            self.is_visible = true;
            el.css('background', color);
        };

        self.hide = function() {
            self.is_visible = false;
            el.css('background', '#ccc');
        };

        self.match = function(other) {
            return self.color === other.color;
        };

        el.attr('game-card-index', index);

        return self;
    };

    var Game = function(el) {
        var self = { cards: [], visible_cards: [] };

        self.init = function() {
            var card_elements = el.find('.card');

            for ( var i=0; i < COLORS.length; i += 1 ) {
                var card = Card(card_elements.eq(i), COLORS[i], i);
                self.cards.push(card);
            }
        };

        self.hide_last_guess = function() {
            for ( var i=0; i < self.visible_cards.length; i++ ) {
                self.visible_cards[i].hide();
            }
            self.visible_cards = [];
        };

        self.is_first_guess = function()  { return self.visible_cards.length === 0; };
        self.is_second_guess = function() { return self.visible_cards.length === 1; };

        self.card_selected = function(card) {
            if ( card.is_visible ) {
                return;
            }

            if ( self.is_first_guess() ) {
                card.reveal();
                self.visible_cards.push(card);

            } else if ( self.is_second_guess() ) {
                var prev = self.visible_cards[0];
                card.reveal();

                if ( prev.match(card) ) {
                    self.visible_cards = [];
                } else {
                    self.visible_cards.push(card);
                    setTimeout( self.hide_last_guess, 300 );
                }
            }
        }

        self.init();
        return self;
    };


    var g = Game($('div.game'));

    var card_selected = function() {
        var idx = Number($(this).attr('game-card-index'));
        var card = g.cards[idx];

        g.card_selected(card);
        window.localStorage.setItem('game', g);
    };


    $('.card').bind('click', card_selected);

}());