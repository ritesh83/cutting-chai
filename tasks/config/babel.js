/**
 * `concat`
 *
 * ---------------------------------------------------------------
 *
 * Concatenates the contents of multiple JavaScript and/or CSS files
 * into two new files, each located at `concat/production.js` and
 * `concat/production.css` respectively in `.tmp/public/concat`.
 *
 * This is used as an intermediate step to generate monolithic files
 * that can then be passed in to `uglify` and/or `cssmin` for minification.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-concat
 *
 */
module.exports = function(grunt) {

  grunt.config.set('babel', {
      options: {
          sourceMap: true,
          presets: ['es2015']
      },
      dist: {
          files: {
              '.tmp/public/concat/production.js': require('../pipeline').jsFilesToInject
          }
      }
  });

  grunt.loadNpmTasks('grunt-babel');
};
