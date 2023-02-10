export const images = () => {
    //Get files except svg
    return app.gulp.src(app.path.src.images)
        //Check new files
        .pipe(app.plugins.newer(app.path.build.images))
        //If for production - compress
        .pipe(
            app.plugins.if(app.isBuild, app.plugins.imagemin({
                progressive: true,
                svgPlugins: [{ removeViewBox: false}],
                interlaced: true,
                optimizationLevel: 3
            }))
        )
        //Move to app folder
        .pipe(app.gulp.dest(app.path.build.images))
        //Get only SVG
        .pipe(app.gulp.src(app.path.src.svg))
        //Check new files
        .pipe(app.plugins.newer(app.path.build.images))
        //Move to app folder
        .pipe(app.gulp.dest(app.path.build.images))
        //Refresh browser
        .pipe(app.plugins.browsersync.stream())
}