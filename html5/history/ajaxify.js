/*global $ */

(function(global) {
  var ajaxify_link, ajaxify_all_links;

  ajaxify_link = function($el, container_selector) {
    var href = $el.attr('href');
    $el.click(function(e) {
      $(container_selector).load(href + ' #' + container_selector, ajaxify_all_links);
      e.preventDefault();
    });
  };

  ajaxify_all_links = function() {
    $('a').each(function() {
      var $a = $(this);

      $a.click(ajaxify_link($a, '#content-wrapper'));
    });
  };

  $(document).ready(function() {
    ajaxify_all_links();
  });





}(this));
