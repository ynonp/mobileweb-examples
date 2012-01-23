/*global self */

(function() {
    var fib = [0, 1];

    /**
     * The Worker Thread
     *
     * A WebWorker is a new thread running in its own main loop
     * It has limited capabilities, and designed to perform complex
     * calculations.
     *
     * The worker will run until closed explicitly with a call to close
     *
     * In addition, self is the same as this and refers to a
     * dedicated global object (worker-specific)
     */

    addEventListener('message', function(e) {
        var data = e.data;
        var count = data.count;
        
        for (var i=fib.length; i < count; ++i ) {
            fib[i] = fib[i-1] + fib[i-2];
        }

        data.result = fib[i-1];

        // send a message to the caller
        self.postMessage(data);

        // IMPORTANT - finish work and free up the memory
        self.close();

    }, false);
}());
