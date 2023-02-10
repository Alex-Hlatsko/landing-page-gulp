export const html = () => {
    //Get files
    return app.gulp.src(app.path.src.html)
        //Build html files
        .pipe(app.plugins.fileinclude())
        //Move to app folder
        .pipe(app.gulp.dest(app.path.build.html))
        //Refresh browser
        .pipe(app.plugins.browsersync.stream())
}