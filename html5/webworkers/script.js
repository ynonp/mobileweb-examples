/*global Mustache */
/*global $ */

(function(global) {

    var BIGNUM = 999999;

    var fib = function(count) {
        var result = [0, 1];

        for ( var i=result.length; i < count; ++i ) {
            result[i] = result[i-1] + result[i-2];
        }

        return result[i-1];
    };

    var WorkerView = function($el) {
        var that = {};

        that.set_workers = function() {
            var workers_count = Number($('#workers-count').val());
            that.workers = [];

            for ( var i=0; i < workers_count; ++i ) {
                that.workers.push(new Worker('worker.js'));
            }
            that.render();
        };

        that.render = function() {
            var template =  '{{#workers}}' +
                            $('#worker-result-line').html() +
                            '{{/workers}}';

            var html = Mustache.render(template, that);
            $el.html(html);
        };

        return that;
    };

    $(document).ready(function() {
        var wv = new WorkerView($('#workers'));
        wv.set_workers();

        $('#workers-count').bind('change', wv.set_workers);

        /**
         * First part is the calculation without using web workers
         * As long as the browser is calculating, no other task
         * can be performed and the UI is frozen.
         */
        $('#btn-start-normal').click(function(e) {
            var result_boxes = $('input.result');
            var t0 = new Date();

            for (var i=0; i < wv.workers.length; ++i ) {
                result_boxes.eq(i).val(fib(BIGNUM + i));
            }

            var t1 = new Date();
            $('#time').val(t1-t0);
            e.preventDefault();
        });

        /**
         * Second part is using web workers. There are a couple of
         * things to note about this example:
         *
         * 1. The use of postMessage to communicate between master
         *    and workers.
         *
         * 2. A worker cannot change the DOM, so we must provide
         *    it with some "context" info, so when the worker
         *    finishes, we'll know where to put its result
         *
         * 3. The argument to postMessage is used as the "data"
         *    field in the event object
         */
        $('#btn-start-workers').click(function(e) {
            var result_boxes = $('input.result');
            var t0 = new Date();
            var handle_result = function(e) {
                var data = e.data;

                var result = data.result;
                var target = result_boxes.eq(data.target_idx);

                target.val(result);
            };

            for ( var i=0; i < wv.workers.length; ++i ) {
                wv.workers[i].addEventListener('message', handle_result);
                wv.workers[i].postMessage({
                    count: BIGNUM + i,
                    target_idx: i
                });
            }

            var t1 = new Date();
            $('#time').val(t1-t0);
            e.preventDefault();
        });
    });


}(this));
