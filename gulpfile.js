/*

I want to keep my task builder as simple as possible and avoid complications!
The following simple tasks can be called:
	
	gulp coffee     => To just convert coffee to Javascript
	gulp javascript => To Minify JS files (coffeescripted as well as original) and transfer
	gulp scripts 	=> To do the above 2 commands
	
	gulp css		=> To just convert CSS to minified version and transfer
	gulp sass		=> To convert scss/sass files to css 
	gulp styles		=> To do the above 2 commands
	
	gulp others 	=> To transfer the assets and documents 'as-is' to development.	

	[For backend developers] ==> gulp index : To take care of site root redirects 
											   Read the file for more info.
	
	(QUICK VERSION - The Ultimate command)
	gulp project	=> To take care of all the other operations with default configurations

*/

var gulp = require('gulp');

// General operations
var es = require('event-stream');
var concat = require('gulp-concat');
var sequence = require('run-sequence');

/************** WHAT YOU NEED TO CARE ABOUT ************/

// Javascript + Coffeescript convert and minify
var uglify = require('gulp-uglify');
var coffee = require('gulp-coffee');

// CSS + SCSS convert and minify
var sass = require('gulp-sass');
var css = require('gulp-clean-css');

/*******************************************************/

// Minify JS files (coffeescripted as well as original)
gulp.task('javascript', function(){
	
	var orginalJSfiles = gulp.src('src/scripts/*.js');
	var coffeedJSfiles = gulp.src('src/scripts/temp/*.js');
	
	return es.merge(orginalJSfiles, coffeedJSfiles)
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/scripts'));
	
});

// Just Convert Coffeescript files to JS
gulp.task('coffee', function(){
	
	console.log("Later,run 'gulp javascript' to push them into distro!");
	
	return gulp.src('src/scripts/*.coffee')
		 .pipe(coffee())
		 .pipe(gulp.dest('src/scripts/temp'));
	
});

// Minify all Javascript and Coffeescript files !
gulp.task('scripts', ['coffee','javascript'], function(){	
	console.log("Auto Running 'gulp javascript' command !");	
});

// minify css by calling 'css()'
gulp.task('css', function() {
	
	var orginalCSSfiles = gulp.src('src/style/*.css');
	var sassedCSSfiles = gulp.src('src/style/temp/*.css');
	
    return es.merge(orginalCSSfiles, sassedCSSfiles)
		.pipe(concat('all.min.css'))
        .pipe(css({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/style'));
		
});

// Just convert SCC to CSS in a temp directory 
gulp.task('sass', function(){
	
	console.log("Later,run 'gulp css' to push them into distro!");
	
    return gulp.src('src/style/*.{scss,sass}')
		.pipe(sass())
        .pipe(gulp.dest('src/style/temp'));
		
});

// Minify all CSS and SCSS files !
gulp.task('styles', ['sass','css'], function(){	
	console.log("Auto Running 'gulp css' command !");	
});

// Transfer index.php to redirect to main site (OPTIONAL) unless you want backend
gulp.task('index', function(){
	
	console.log("Transferring index.php ");	
	return gulp.src('src/index.php').pipe(gulp.dest('dist/'));
	
});


// Transfer all other assets !
gulp.task('others', function(){	
	console.log("Transferring other assets.");	
	return gulp.src('src/docs/**/*').pipe(gulp.dest('dist/docs'));
	
});

// Ultimate CONVERT + MINIFY + TRANSFER1(JS,CSS) + TRANSFER2(ASSETS)
gulp.task('project', function(done){
	console.log("Transferring all the project items to distro!");
	sequence('others', 'index', 'sass', 'css', 'coffee', 'javascript', done);
});








