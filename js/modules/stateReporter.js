// ************************************************************************* //
// ========================================================================= //
//
// State reporter
//   Just a demo to show subscribing to media queries.
//
// ========================================================================= //
// ************************************************************************* //


define('stateReporter', function(require) {

    var mq = require('mediaQueryManager');

    var $body;
    var $reporter;

    function report(state) {
        $reporter.html(state.level + ' ' + state.name);
    }

    jQuery(document).ready(function($) {

        $body = $('body');
        $reporter = $('<div>', {
            id : 'state-reporter'
        });

        // add the reporter
        $body.append($reporter);

        // report the starting state
        report( mq() );

        // on change, report the state as well
        $body.on('change.mq', function(event, state) {
            report(state);
            // log it so you can see both name and level
            console.log(state);
        });
    });

});