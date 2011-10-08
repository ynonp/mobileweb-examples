(function() {
    var images = ['img/veg1.jpg', 'img/veg2.jpg', 'img/veg3.jpg', 'img/veg4.jpg'];

    $(function() {

        // init the gallery by giving each img div a different background image
        $('div#gallery div.img').each(function(index, el) {
            $(el).css('background-image', 'url(' + images[index] + ')');
        });

    });


}());

