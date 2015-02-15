/* jshint browser: true */
/* global $ */

$(function() {
    'use strict';

    var $navBar = $('nav'),
        $downloadButton = $('#button-download'),
        $warningDialog = $('<div>').html($('#warning-dialog-content').html());

    $(document).on('click', function(e) {
        if ($(e.target).closest('.nav-menu').length) {
            $navBar.toggleClass('nav-open');
        } else if (!$(e.target).closest('.nav-right').length) {
            $navBar.removeClass('nav-open');
        }
    });

    $downloadButton.on('click', function() {
        $warningDialog.modal();
    });
});
