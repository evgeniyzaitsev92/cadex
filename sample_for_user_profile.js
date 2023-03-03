$(function() {
    var INTEGRATION_PANEL_SELECTOR = '#integrations_info_panel';

    var addCode = function(selector, htmlCode, after) {
        var element = $(selector);

        if(checkNotUndefined(after) === true && after === true) {
            element.append(htmlCode);
        } else {
            element.prepend(htmlCode);
        }
    };

    html = '<div class="right_info_panels">';
    html += '<ul>';
    html += '<li>' + ' TEST FIELD ' + '</li>';
    html += '</ul>';
    html += '</div>';

    addCode(INTEGRATION_PANEL_SELECTOR, html, false);


});