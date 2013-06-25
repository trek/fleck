module.exports = function(grunt) {

  grunt.initConfig({
    jasmine: {
      fleck: {
        src: 'lib/*.js',
        options: {
          specs: 'spec/*Spec.js',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('test', ['jasmine']);

};