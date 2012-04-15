(function () {

    var person = {
        buy: function() { console.log("I'm rich"); }
    };

    var  car = {
        drive: function() { console.log("Vroom Vroom"); },
        price: 99999
    };

    // print Vrum Vrum
    car.drive();

    // print I'm rich
    if ( car.price > 1000 ) {
        person.buy(car);
    }
}());

