(function(global) {
    var Filters = {};

    /**
     * Takes an image and paint it on a new dynamic canvas
     * Nothing is visible on screen because createCanvas does
     * not change the DOM
     * In the end, getImageData is used to read an array of
     * all the pixels in the image
     */

    Filters.getPixels = function(img) {
        var c = this.createCanvas(img.width, img.height);
        var ctx = c.getContext('2d');

        ctx.drawImage(img, 0, 0);
        return ctx.getImageData(0, 0, c.width, c.height);
    };

    /** 
     * Create a new canvas and return it
     * This does not affect the active document for the
     * canvas is not added
     */
    Filters.createCanvas = function(w, h) {
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;

        return canvas;
    };

    /**
     * takes a filter function, an image and a list of arguments,
     * and run the filter function on the image, returning
     * the result. 
     * filter function is provided with var_args as arguments and
     * runs with null context (this)
     */

    Filters.filterImage = function(filter, image, var_args) {
        var args = [this.getPixels(image)];

        for ( var i=2; i < arguments.length; ++i ) {
            args.push(arguments[i]);
        }

        return filter.apply(null, args);
    };

    /**
     * A grayscale filter changes the color of each
     * pixel by dividing rgb values in magic dividers
     * See http://en.wikipedia.org/wiki/Grayscale
     */

    Filters.grayscale = function(pixels, args) {
        var d = pixels.data;

        for ( var i=0; i < d.length; i += 4 ) {
            var r = d[i];
            var g = d[i+1];
            var b = d[i+2];

            var v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            d[i] = d[i+1] = d[i+2] = v;
        }
        return pixels;
    };

    /** 
     * Lightening up an image is performed by adding
     * a fixed value to each rgb part in the pixels
     */

    Filters.brightness = function(pixels, adj) {
        var d = pixels.data;

        for ( var i=0; i < d.length; i += 4 ) {
            d[i] += adj;
            d[i+1] += adj;
            d[i+2] += adj;
        }

        return pixels;
    }

    /**
     * A convenient function taking an img element
     * and runs a filter on it
     */
    Filters.filterImageElement = function(el, filter, args) {
        var c = this.createCanvas(el.width, el.height);
        var ctx = c.getContext('2d');

        console.log(c.width + ':' +  c.height);
        var pixels = Filters.filterImage(filter, el, args);
        ctx.putImageData(pixels, 0, 0);
        el.setAttribute('src', c.toDataURL());
    };

    global.Filters = Filters;
}(this));

