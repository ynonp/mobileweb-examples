
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};


exports.ex1 = function( req, res ) {
    var username = req.param('username');
    var pwd      = req.param('password');

    if ( ( username === 'ali' ) && ( pwd === 'baba' ) ) {
        res.send({ success: true });
    } else {
        res.send({ success: false });
    }
};

exports.ex2 = function( req, res ) {
    res.send({
        name: 'Jim',
        age: 77,
        gender: 'm',
        eyes: 'Green'
    });
};

exports.ex3 = function( req, res ) {
    res.send({
        name: { first: 'Jim', last: 'Jones' },
        age: 11,
        address: { country: 'Israel', city: 'Eilat' },
        likes: ['Sports', 'Dancing']
    });
};

var ex4_data = {
    name: 'Tom',
    age: 20,
    eyes: 'Green'
};

exports.ex4_get_data = function( req, res ) {
    res.send( ex4_data );
};

exports.ex4_set_data = function( req, res ) {
    if ( req.param('name') ) {
        ex4_data.name = req.param('name');
    }

    if ( req.param('age') ) {
        ex4_data.age = req.param('age');
    }

    var eye_colors = { green: 1, blue: 1, brown: 1 };
    var eyes = req.param('eyes');
    if ( eye_colors[eyes] === 1 ) {
        ex4_data.eyes = eyes;
    }

    res.send( ex4_data );
};

exports.ex5 = function( req, res ) {
    var random_order = function() { return Math.round(Math.random())-0.5 };
    var colors = ['blue', 'green', 'white', 'yellow', 'magenta', 'orange', 'pink'];

    res.send( colors.sort( random_order ) );
};

var score = [];
exports.ex6_post = function( req, res ) {

    var name  = req.param('name');
    var hs = req.param('score');

    if ( ! name || ! hs ) {
        throw 'Missing Argument';
    }

    score.push({
        player: name,
        score: hs
    });
    res.send(200);
};

exports.ex6_get = function(req, res ) {
    var by_score = function(a, b) {
        return b.score - a.score;
    };
    res.send( score.sort( by_score).slice(0,10) );
};

