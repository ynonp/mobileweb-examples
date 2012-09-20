/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 9/20/12
 * Time: 12:37 PM
 * To change this template use File | Settings | File Templates.
 */


var Todo = Backbone.Model.extend({
    defaults: {
        title: 'Untitled Item'
    },
    urlRoot: '/todos'
});

var TodoView = Backbone.View.extend({

    tagName: 'form',
    className: 'todo-item',

    events: {
        'click #btn-save': 'save',
        'click #btn-restore': 'restore',
        'submit': 'abort'
    },

    render: function() {
        console.log(this.model.toJSON().title);
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    template: Handlebars.compile($('#tmpl-todo').html()),


    save: function() {
        var title = this.$el.find('input').val();
        this.model.set('title', title);
        this.model.save();
    },

    restore: function() {
        var title = this.model.get('title');
        var self = this;

        this.model.fetch({
            success: function() {
                self.$el.find('input').val(title);
            },
            error: function(err) {
                alert("Server Error: " + err);
            }
        });


    },

    abort: function(e) {
        e.stopPropagation();
        e.preventDefault();
    }
});

var todo = new Todo({ id: 2 });
var tv = new TodoView({model: todo });
$('body').append(tv.render().el);
console.log("done");


todo.on('change', function() {
    console.log('got new server data');
    console.dir(this);
});