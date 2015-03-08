/* jshint browser: true */
/* global $ */

$(function() {
    'use strict';

    var $navBar = $('nav'),
        $coverVideo = $('#cover-video'),
        $downloadButton = $('#button-download'),
        $betaButton = $('#button-beta'),
        $requirementsButton = $('#button-requirements'),

        // If you do not add the width the
        // lightbox is not centralized.
        $dialogContainer = $('<div style="width:350px"></div>');

    /**
     * Insert a modal content
     * @param  {string} element with content
     */
    var displayModalContent = function(element) {
        $dialogContainer.html($(element).html());
        $dialogContainer.modal();
    };

    $(document).on('click', function(e) {
        if ($(e.target).closest('.nav-menu').length) {
            $navBar.toggleClass('nav-open');
        } else if (!$(e.target).closest('.nav-right').length) {
            $navBar.removeClass('nav-open');
        }
    });

    $downloadButton.on('click', function() {
        displayModalContent('#warning-dialog-content');
    });

    $betaButton.on('click', function(event) {
        event.preventDefault();
        displayModalContent('#beta-dialog-content');
    });

    $requirementsButton.on('click', function(event) {
        event.preventDefault();
        displayModalContent('#requirements-dialog-content');
    });

    $coverVideo.on('click', function() {
        var video = $(this).attr('data-video');

        $('<iframe>').attr({
            width: '853',
            height: '480',
            frameborder: 0,
            allowfullscreen: true,
            src: video
        }).addClass('lightbox-dialog').modal();
    });
});
