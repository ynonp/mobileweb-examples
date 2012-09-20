
/*
 * GET home page.
 */

var o = { id: 2, title: 'Feed The Zombie' };

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.getTodoItem = function( req, res ) {
    console.log('Client requested info');
    res.send( o );
};

exports.setTodoItem = function( req, res ) {
    if ( req.param('title') ) {
        o.title = req.param('title');
    }

    console.log('Setting Title To: ' + o.title);
    res.send(o);
};
