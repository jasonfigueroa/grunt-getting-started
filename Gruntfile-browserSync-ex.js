module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['js/*.js'],
        tasks: ['eslint', 'browserify'],
        options: {
          spawn: false,
        },
      },
    },
    eslint: {
      target: ['js/*.js'],
    },
    browserify: {
      dist: {
        files: {
          'build/bundle.js': ['js/*.js'],
        },
      },
    },
    browserSync: {
      bsFiles: {
        src: 'build/*.js',
      },
      options: {
        server: {
          baseDir: './',
        },
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['eslint', 'browserify', 'watch']);
  grunt.registerTask('bsync', ['browserSync']);
};

