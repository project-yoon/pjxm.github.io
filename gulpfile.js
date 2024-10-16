'use strict';
const gulp = require('gulp');
const minify = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const htmlinlcude = require('gulp-html-tag-include');
const browsersync = require('browser-sync').create();
// const del = require('del');
// const changed = require('gulp-changed');

const paths = {
	port:'5500',
	in:'./src/**/*',
	out:'./dist/',
	html: {
		in: './src/dev/html/**/**/**',
		out: './dist/dev/html'
	},
	style:{
		in:'./src/dev/assets/scss/**/*.scss',
		out:'./dist/dev/assets/css'
	},
	js: {
		in : './src/dev/assets/js/**/**/*.js',
		out : './dist/dev/assets/js'
	},
	font:{
		in:'./src/dev/assets/fonts/**/*',
		out:'./dist/dev/assets/fonts'
	},
	img:{
		in:'./src/dev/assets/images/**/**',
		out:'./dist/dev/assets/images'
	},
    startpage:{
		in: './src/*.html',
		out: './dist/'
	}
};
//browser-sync
function browserSync(done) {
	console.log("start sync...");
    browsersync.init({
        port:paths.port,
		server:{
			baseDir: paths.out
		},
		// gulp 실행 시 로드 화면
        // startPath:'./dev/html/index.html'
        // startPath:'./dist/index.html' 
        // startPath:'/dist/dev/html/index.html'
    })
	done();
}
//scss
const scssOptions = {
/**
 * outputStyle (Type : String , Default : nested)
 * CSS의 컴파일 결과 코드스타일 지정
 * Values : nested, expanded, compact, compressed
*/
outputStyle : "expanded",
/** 
 * indentType (>= v3.0.0 , Type : String , Default : space)
 * 컴파일 된 CSS의 "들여쓰기" 의 타입
 * Values : space , tab
*/
indentType : "tab",
/**
 * indentWidth (>= v3.0.0, Type : Integer , Default : 2)
 * 컴파일 된 CSS의 "들여쓰기" 의 갯수\
*/
indentWidth : 1, // outputStyle 이 nested, expanded 인 경우에 사용
/**
 * precision (Type : Integer , Default : 5)
 * 컴파일 된 CSS 의 소수점 자리수.
*/
precision: 6,
/** 
* sourceComments (Type : Boolean , Default : false)
* 컴파일 된 CSS 에 원본소스의 위치와 줄수 주석표시.
*/ 
sourceComments: true
};

//scss
function compilesass(done) {
	gulp.src(paths.style.in, {sourcemaps: true})
    .pipe(sass(scssOptions).on('error', sass.logError))
	// .pipe(sass.sync().on('error', sass.logError))
	.pipe(sass({outputStyle:'expanded'}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(paths.style.out))
	.pipe(browsersync.reload({stream:true}))
	.on('end', done);  // 압축버전 스트림이 끝난 후 done 호출
	// 압축버전
	gulp.src(paths.style.in, {sourcemaps: true})
	.pipe(sass.sync().on('error', sass.logError))
	// .pipe(minify({ compatibiliy: 'ie8' }))
	.pipe(sass({outputStyle:'compressed'}))
	.pipe(gulp.dest(paths.style.out+'/min'))
	// done();
	.on('end', done);  // 스트림이 끝난 후 done 호출
}
//html
function compilehtml() {
	return gulp.src(paths.html.in)
	.pipe(htmlinlcude())
	.pipe(gulp.dest(paths.html.out))
	.pipe(browsersync.reload({stream:true}));
}
//js
function js() {
	return gulp.src(paths.js.in)
	.pipe(gulp.dest(paths.js.out))
	.pipe(browsersync.reload({stream:true}));
}
//images
function img() {
	return gulp.src(paths.img.in)
	.pipe(gulp.dest(paths.img.out))
	.pipe(browsersync.reload({stream: true}));
}
//fonts
function font() {
    return gulp.src(paths.font.in)
    .pipe(gulp.dest(paths.font.out))
    .pipe(browsersync.reload({stream:true}));
}
//startpage
function startpage() {
	return gulp.src(paths.startpage.in)
	.pipe(htmlinlcude())
	.pipe(gulp.dest(paths.startpage.out))
	.pipe(browsersync.reload({stream:true}));
}

//create watchtasks
function watchTasks() {

	gulp.watch(paths.html.in, compilehtml);
    gulp.watch(paths.style.in, compilesass);
    gulp.watch(paths.js.in, js);
    gulp.watch(paths.img.in, img);
    gulp.watch(paths.font.in, font);
    gulp.watch(paths.startpage.in, startpage);
}
// export tasks
exports.default = gulp.series(gulp.parallel(compilehtml,compilesass,js,img,font,startpage), browserSync, watchTasks);