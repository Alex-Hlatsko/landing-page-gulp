export const fonts = () => {
    //Get files
    return app.gulp.src(app.path.src.fonts)
        //Convert to woff2
        .pipe(app.plugins.tt2woff2())
        //Move to app folder
        .pipe(app.gulp.dest(app.path.build.fonts))
        //Refresh browser
        .pipe(app.plugins.browsersync.stream())
}