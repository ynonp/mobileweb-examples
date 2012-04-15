(function () {
    var Emp = function() { };

    Emp.prototype.hello = function() {
        console.log("I work at IBM");
    };

    var employees = [ new Emp(), new Emp(), new Emp() ];

    for (var i=0; i < employees.length; ++i ) {
        // print I work at IBM
        employees[i].hello();
    }

}());

