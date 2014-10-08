'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    ngmin: {
      dist: {
        files: [{
          cwd: 'src/',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
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
    // jasmine: {
    //   main: {
    //     src: 'src/*.js',
    //     options: {
    //       specs: 'test/*.js',
    //       // helpers: 'spec/*Helper.js'
    //     }
    //   }
    // }

  });

  grunt.registerTask('build', function() {
    grunt.task.run([
      'clean:dist',
            //'concat'
            //'uglify'
            ]);
  });

  grunt.registerTask('default', [
    'jshint',
    // 'test',
    'build'
    ]);
};
