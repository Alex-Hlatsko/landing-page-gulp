export const libs = () => {
    //Get files
    return app.gulp.src(app.path.src.libs)
        //Move to app folder
        .pipe(app.gulp.dest(app.path.build.libs))
}