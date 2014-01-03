define('stateReporter', function(require) {

    var mq = require('mediaQueryManager');

    var $body;
    var $reporter;

    jQuery(document).ready(function($) {

        $body = $('body');
        $reporter = $('<div>', {
            id : 'state-reporter'
        })

        $body.append($reporter);

        report( mq() );

        $body.on('change.mq', function(event, state) {
            report(state);
            console.log(state);
        });
    });

    function report(state) {
        $reporter.html(state.level + ' ' + state.name);
    }


})