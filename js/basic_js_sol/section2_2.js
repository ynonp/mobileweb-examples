(function () {
    var Summer = function() {
        var sum = 0;

        var self = {
            add: function(n) { sum += n; },
            getCurrentSum: function() { return sum; }
        };

        return self;
    };

    var s1 = Summer();
    var s2 = Summer();

    s1.add(10);
    s1.add(20);

    s2.add(30);

    s2.add(5);

    // prints 30
    console.log(s1.getCurrentSum());

    // prints 35
    console.log(s2.getCurrentSum());

}());

