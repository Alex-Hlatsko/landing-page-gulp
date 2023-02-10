export const scripts = () => {
    //Get files
    return app.gulp.src(app.path.src.scripts)
        //Rename
        .pipe(app.plugins.concat('main.min.js'))
        //If for production - compress
        .pipe(
            app.plugins.if(app.isBuild, app.plugins.uglify())
        )
        //Move to app folder
        .pipe(app.gulp.dest(app.path.build.scripts))
        //Refresh browser
        .pipe(app.plugins.browsersync.stream())
}