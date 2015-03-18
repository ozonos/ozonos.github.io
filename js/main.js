/* jshint browser: true */
/* global $ */

$(function() {
    'use strict';

    var $navBar = $('nav'),
        $coverVideo = $('#cover-video'),
        $downloadButton = $('#button-download'),
        $betaButton = $('#button-beta'),
        $requirementsButton = $('#button-requirements');

    $(document).on('click', function(e) {
        if ($(e.target).closest('.nav-menu').length) {
            $navBar.toggleClass('nav-open');
        } else if (!$(e.target).closest('.nav-right').length) {
            $navBar.removeClass('nav-open');
        }
    });

    $downloadButton.on('click', function() {
        $('<div>').html($('#warning-dialog-content').html()).modal();
    });

    $betaButton.on('click', function() {
        $('<div>').html($('#beta-dialog-content').html()).modal();
    });

    $requirementsButton.on('click', function() {
        $('<div>').html($('#requirements-dialog-content').html()).modal();
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
