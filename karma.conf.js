
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      "vendor/components/simple-require/simple-require.js",
      "vendor/components/jquery/jquery.js",
      "vendor/components/underscore/underscore.js",
      "vendor/components/backbone/backbone.js",
      "vendor/components/backbone.stickit/backbone.stickit.js",
      "vendor/components/marionette/lib/backbone.marionette.js",

      'app/assets/javascripts/templates/**/*.jst.hbs',
      'app/assets/javascripts/table/**/*.js'
    ],

    exclude: [
    ],

    preprocessors: {
      '**/*.hbs': 'handlebars'
    },

    handlebarsPreprocessor: {
      templates: "JST",

      templateName: function(filepath) {
        return filepath.replace(/^.*\/app\/assets\/javascripts\/(.+)\.jst\.hbs$/, '$1');
      },

      transformPath: function(path) {
        return path.replace(/\.jst\.hbs$/, '.js');
      }
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    captureTimeout: 60000,
    singleRun: false
  });
};
