/* jshint browser: true */
/* global $ */

$(function() {
    'use strict';

    var $downloadButton = $('#button-download'),
        $warningDialog = $('<div>').html($('#warning-dialog-content').html());

    $downloadButton.on('click', function() {
        $warningDialog.modal();
    });
});
