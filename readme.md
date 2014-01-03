# mediaQueryManager.js

A proof of concept for a requirejs module that manages your media query states, allowing you to keep JS  changes synced with CSS breakpoints. Breakpoints are only defined once in a _breakpoint.scss file.

Based on my own noodlings absorbed into David Walsh's [post on the topic.](http://davidwalsh.name/device-state-detection-css-media-queries-javascript)

It gives you a `level:Number` and a `name:String` so you can use either one. Number can be nice at times when you want a certain feature maybe only `if ( level > 1 )`. Names can also be nice so you can say `if ( name == 'lap')`. Modules can subscribe to body `change.mq` events or just pull the current media query info.

##[Demo](http://matthewlein.github.io/mediaQueryManager.js/)