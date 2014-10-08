'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    ngAnnotate: {
      options: {
        singleQuotes: true,
      },
      app1: {
        files: {
          '.tmp/main.js': ['src/main.js'],
        },
      },
    },

    concat: {
      dist: {
        src: ['src/main.js'],
        dest: 'dist/main.js',
      },
    },

    uglify: {
      my_target: {
        files: {
          'dist/main.min.js': ['.tmp/main.js']
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        'src/*.js'
      ]
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            'dist/*',
          ]
        }]
      },
      server: '.tmp'
    },

    // karma: {
    //   unit: {
    //     configFile: 'karma.conf.js'
    //   }
    // },
    jasmine: {
      main: {
        src: 'src/*.js',
        options: {
          specs: 'test/*.js',
          vendor: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/jquery.lazyload/jquery.lazyload.js',
          'bower_components/angular/angular.js',
          'bower_components/angular-mocks/angular-mocks.js',
          ]
        }
      }
    }

  });

  grunt.registerTask('test', [
    'jasmine'
  ]);

  grunt.registerTask('build', function() {
    grunt.task.run([
      'clean:dist',
      'test',
      'ngAnnotate',
      'copy:dist',
      'uglify'
            //'concat'
            //'uglify'
            ]);
  });

  grunt.registerTask('default', [
    'jshint',
    'build'
    ]);
};
