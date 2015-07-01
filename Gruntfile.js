module.exports = function(grunt){
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	grunt.initConfig({
		
		concat: {
			dev: {
				
				src : ['public/js/mybook/*.js'],
				dest: 'public/js/mybook/application.js'
			}
		}
		
	});
	
	grunt.registerTask('dev',['concat:dev']);
};