module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			target: [
				'routes/**/*.js',
				'mappers/**/*.js',
				'schema/**/*.js',
				'test/**/*.js',
				'./*.js'
			]
		},
		jscs: {
			src: [
				'routes/**/*.js',
				'mappers/**/*.js',
				'schema/**/*.js',
				'test/**/*.js',
				'./*.js'
			],
			options: {
				config: '.jscsrc',
				requireCurlyBraces: ['if']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');

	grunt.registerTask('default', ['jshint', 'jscs']);
};
