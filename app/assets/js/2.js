var x = jQuery.noConflict(),

    //isMobile = 'ontouchstart' in document.documentElement,

    //hasCanvas = document.createElement( 'canvas' ).getContext,

    App = {

        s: null,

        init: function() {
            // if( ! hasCanvas ) {}
        },

        ajaxCalls: function() {},

        domReady: function() {
            // if( ! isMobile ) {}

            x('body').queryLoader2({
                barColor: "#6fbe68",
                backgroundColor: "#37353a",
                percentage: true,
                barHeight: 2
            });

            x('input, textarea').placeholder();
            x('textarea').autosize({
                append: ''
            });

            x('#parallax').parallax();

            this.s = skrollr.init({
                smoothScrolling: true,
                smoothScrollingDuration: 500,
                constants: {
                    one: 920,
                    two: 2000,
                    three: 6000,
                    four: 10000
                },
                edgeStrategy: 'set',
                easing: {
                    WTF: Math.random,
                    inverted: function(p) {
                        return 1 - p;
                    }
                }
            });

            //this.ajaxCalls();
            this.windowResize();
        },

        windowLoad: function() {},

        windowResize: function() {
            var screenHeight = x(window).height();
            //var screenWidth = x( window ).width();

            x('#top').css('height', screenHeight);
            x('#intro').css('height', screenHeight);
            x('main').css('height', screenHeight - 60);

            // Refresh Skrollr instance!
            //this.s.refresh();
        }
    };

App.init();

x(document).ready(function() {
    // run this when the DOM is ready, but not when the page itself has loaded (the site has not been painted and content like images have not been loaded).
    App.domReady();

    // run this when the page has been painted and all content has been loaded.
    x(window).load(App.windowLoad);

    // run this when the page has been resized.
    x(window).resize(App.windowResize);
});
