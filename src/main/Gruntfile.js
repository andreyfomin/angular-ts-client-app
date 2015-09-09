module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-karma');

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    //grunt.loadNpmTasks('connect-livereload');

    var curDir = require('path');

    grunt.initConfig({


        clean: ["build"],

        copy:{
            main:{
                expand: true,
                cwd: 'app/',
                src: '**/*.html',
                dest: 'build/'
            }
        },

        typescript: {
            base: {
                src: ['app/**/*.ts'],
                dest: 'build/js/app.js',
                options: {
                    module: 'amd' //or commonjs
                }
            }
        },

        uglify: {
            my_target: {
                options: {
                    sourceMap: true,
                },
                files: {
                    'build/js/app.min.js': ['build/js/app.js'],
                    'build/js/_bower.min.js': ['build/js/_bower.js']
                }
            }
        },

        bower_concat: {
            all: {
                dest: 'build/js/_bower.js',
                cssDest: 'build/css/_bower.css',
                mainFiles: {
                    'bootstrap': 'dist/css/bootstrap.css',
                    'font-awesome': ['css/font-awesome.css','fonts/*']
                }
            },
        },

        bower: {
            dev: {
                dest: 'build',
                options: {
                    ignorePackages: ['jquery','angular'],
                    packageSpecific: {
                        'bootstrap': {
                            dest: 'build',
                            files: [
                                "fonts/**"
                            ]
                        },
                        'font-awesome': {
                            dest: 'build',
                            files: [
                                "fonts/**"
                            ]

                        }
                    }
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            lib: { // <-- Watch for changes on the library and rebuild both
                files: 'app/**/*.ts',
                tasks: ['typescript', 'bower_concat', 'bower', 'uglify']
            }
        },
        open: { // <--- Launch index.html in browser when you run grunt
            dev: {
                path: 'http://localhost:8089/index.html'
            }
        },

        connect: {
            server: {  // <--- Run a local server on :8089
                options: {
                    port: 8089,
                    base: 'build/',
                    livereload: true
                }
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                port: 9999,
                singleRun: true,
                browsers: ['PhantomJS'],
                logLevel: 'INFO',
                files: [
                    { src: [
                        'bower_components/angular/angular.js',
                        'build/js/app.js',
                        'test/**/*.js'] }
                ]
            }
        }
    });

    grunt.registerTask("setOutput", "Set the output folder for the build.", function () {
        var path = require('path');
        grunt.option("target", path.resolve());
        grunt.log.writeln("Output path: " + grunt.option("target"));
    });

    grunt.registerTask('default', ['build_all']);
    grunt.registerTask('build_all', ['clean', 'typescript', 'bower_concat', 'bower', 'uglify', 'copy', 'karma']);

    grunt.registerTask('server', ['typescript', 'connect', 'open', 'watch']);
    grunt.registerTask('test', ['karma']);
}