// Karma configuration
// Generated on Tue Nov 18 2014 19:46:58 GMT+0400 (SAMT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: './bower_components/jquery/dist/jquery.js', watched:false, included:true, served:true},
      {pattern: './bower_components/underscore/underscore.js', watched:false, included:true, served:true},
      {pattern: './bower_components/backbone/backbone.js', watched:false, included:true, served:true},
      {pattern: './bower_components/backbone.localStorage/backbone.localStorage.js', watched:false, included:true, served:true},
      'app/js/*.js',
      'test/*.js',
      {pattern: './bower_components/assert/assert.js', watched:false, included:true, served:true},
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
