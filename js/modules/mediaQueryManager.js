// ************************************************************************* //
// ========================================================================= //
//
// Media Query Manager
//   Depends on _mediaQueryManager.scss to set the levels and names
//   Mobile first
//
// ========================================================================= //
// ************************************************************************* //

define('mediaQueryManager', function(require) {

    // dependencies
    var $ = require('jquery');
    require('jquery.debounce');

    // used to store the device state
    var $mqIndicator;

    // gets the current device state
    // returns a level:Number and name:String
    function getMediaQueryState() {

        var z = parseInt( $mqIndicator.css('zIndex'), 10 );
        var breakpoint = $mqIndicator.css('fontFamily');

        return {
            level : z,
            name : breakpoint
        };
    }

    $(document).ready(function() {

        var $body = $('body');

        // make the indicator
        $mqIndicator = $('<div>', {
            'class' : 'media-query-indicator'
        });
        // put in the body
        $body.append($mqIndicator);

        // empty object for comparing states later
        var lastMqState = getMediaQueryState();

        // throttled resize
        // you might prefer debounce
        $(window).on('resize',
            // 100 is around the smallest notible delay, and falls into a 60hz refresh rate multiple
            // adjust as you feel fit
            $.throttle( 100, function() {

                // get current state
                var currentState = getMediaQueryState();

                // compare with last state
                if( currentState.level !== lastMqState.level ) {
                    // save the newest state
                    lastMqState = currentState;
                    // trigger a custom mediaquery change event, with state data
                    // other modules subscribe to this
                    $body.trigger( 'change.mq', currentState );
                }

            })
        );

    });

    // return getMediaQueryState() so you can grab it anytime
    return getMediaQueryState;

});