module.exports = function(grunt) {
    
        // Project configuration.
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            watch: {
                scripts: {
                  files: ['app.js', 'app2.js'],
                  tasks: ['uglify', 'eslint'],
                  options: {
                    spawn: false,
                  },
                }
            },
            uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                build: {
                    files: [{
                        expand: true,
                        cwd: '.',
                        src: ['app.js', 'app2.js'],
                        dest: 'build',
                        ext: '.min.js'
                    }]
                }
            },
            eslint: {
                target: ['app.js', 'app2.js']
            }
        });
    
        // Load the plugin that provides the "uglify" task.
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-eslint');        
    
        // Default task(s).
        grunt.registerTask('default', ['uglify', 'watch', 'eslint']);
    
    };