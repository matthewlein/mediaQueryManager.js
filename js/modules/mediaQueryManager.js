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
    var $stateIndicator;

    $(document).ready(function() {

        var $body = $('body');

        // make the indicator
        $stateIndicator = $('<div>', {
            class : 'state-indicator'
        });
        // put in the body
        $body.append($stateIndicator);

        // empty object for comparing states later
        var lastDeviceState = getDeviceState();

        // throttled resize
        // you might prefer debounce
        $(window).on('resize',
            // 100 is around the smallest notible delay, and falls into a 60hz refresh rate multiple
            // adjust as you feel fit
            $.throttle( 100, function() {

                // get current state
                var state = getDeviceState();

                // compare with last state
                if( state.level !== lastDeviceState.level ) {
                    // save the newest state
                    lastDeviceState = state;
                    // trigger a custom mediaquery change event, with state data
                    // other modules subscribe to this
                    $body.trigger( 'change.mq', state );
                }

            })
        );

    });

    function getDeviceState() {

        var z = parseInt( $stateIndicator.css('zIndex'), 10 );
        var breakpoint = $stateIndicator.css('fontFamily');

        return {
            level : z,
            name : breakpoint
        };
    }

    // return getDeviceState() so you can grab it anytime
    return getDeviceState;

});