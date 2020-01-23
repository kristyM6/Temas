"use strict";

function Typewrite(selector) {
    var timeout, character = 0, text = selector.text(), length = text.length;
    var blinker = '<span class="blink">_</span>';

    (function write() {
        timeout = setTimeout(function () {
            character++;
            var type = text.substring(0, character);
            selector.html(type + blinker);
            write();

            if (character === length) {
                clearTimeout(timeout);
            }
        }, 65);
    }());
}

$(document).ready(function () {
    /* Init highlight.js */
    if (typeof hljs === 'object') {
        hljs.initHighlighting();
    }
    /* Init sidenav menu */
    $('.sidenav').sidenav();
    /* Write the blog's description */
    Typewrite($('.blog-description .text'));
});