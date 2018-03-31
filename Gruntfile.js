module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			target: [
				'mappers/**/*.js',
				'models/**/*.js',
				'routes/**/*.js',
				'schema/**/*.js',
				'test/**/*.js',
				'util/**/*.js',
				'./*.js'
			]
		},
		jscs: {
			src: [
				'mappers/**/*.js',
				'models/**/*.js',
				'routes/**/*.js',
				'schema/**/*.js',
				'test/**/*.js',
				'util/**/*.js',
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
