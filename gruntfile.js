module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        compass: {
            dist: {
                options: {
                    sourcemap: true,
                    config: 'config.rb'
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: [
                'gruntfile.js',
                'app/assets/js/*.js'
            ]
        },
        jsbeautifier: {
            files: [
                'gruntfile.js',
                'app/assets/js/*.js'
            ]
        },
        uglify: {
            options: {
                'sourceMap': true
            },
            dist: {
                files: {
                    'public/assets/js/jquery.min.js': [
                        'app/assets/js/vendor/jquery-1.11.1.js'
                    ],
                    'public/assets/js/1.min.js': [
                        'app/assets/js/vendor/custom.modernizr.js'
                    ],
                    'public/assets/js/2.min.js': [
                        'app/assets/bower_components/skrollr/src/skrollr.js',
                        'app/assets/bower_components/queryloader2/queryloader2.min.js',
                        'app/assets/bower_components/parallax/deploy/jquery.parallax.js',
                        'app/assets/bower_components/jquery-autosize/jquery.autosize.js',
                        'app/assets/bower_components/jquery-placeholder/jquery.placeholder.js',
                        'app/assets/bower_components/magnific-popup/dist/jquery.magnific-popup.js',
                        'app/assets/bower_components/velocity/velocity.js',
                        'app/assets/js/plugins/easing.js',
                        'app/assets/js/modules/functions.js',
                        'app/assets/js/2.js'
                    ],
                    'public/assets/js/ie.min.js': [
                        'app/assets/js/ie.js'
                    ]
                }
            }
        },
        watch: {
            options: {
                livereload: false
            },
            css: {
                files: [
                    'app/assets/scss/**/*.scss'
                ],
                tasks: [
                    'compass'
                ]
            },
            js: {
                files: [
                    'app/assets/js/modules/*.js',
                    'app/assets/js/*.js'
                ],
                tasks: [
                    //'jsbeautifier',
                    'jshint',
                    'uglify'
                ]
            },
            php: {
                files: [
                    'app/views/**/*.php'
                ]
            }
        },
        clean: {
            dist: [
                'public/assets/css/*',
                'public/assets/js/*'
            ]
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    // Register tasks
    grunt.registerTask('default', [
        'clean',
        'compass',
        'jsbeautifier',
        'jshint',
        'uglify'
    ]);

    grunt.registerTask('dev', [
        'watch'
    ]);
};
