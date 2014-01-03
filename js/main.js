
requirejs.config({
    baseUrl: 'js/modules/',
    // I JUST NEED MORE TIME, REQUIRE!!
    waitSeconds: 45,
    paths: {
        // jquerys
        'jquery' : '../lib/jquery-1.10.2.min',
        'jquery.debounce' : '../lib/jquery.ba-throttle-debounce.min',
        // modules
        'mediaQueryManager' : 'mediaQueryManager',
        'stateReporter' : 'stateReporter'
    },
    shim : {
        // jquerys
        'jquery.debounce' : ['jquery']
    }
});



// Start the main app logic.
define('main', function(require) {
    // the app
    require('app');
});