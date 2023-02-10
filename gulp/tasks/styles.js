//Imports
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

export const styles = () => {
    //Get files
    return app.gulp.src(app.path.src.styles, {sourcemaps: true})
        //If for production - compress and css
        .pipe(
            app.plugins.if(app.isBuild, sass({outputStyle: "compressed"})),
        )
        //If for development - css
        .pipe(
            app.plugins.if(app.isDev, sass({outputStyle: "expanded"})),
        )
        //Rename
        .pipe(app.plugins.concat('style.min.css'))
        //Move to app folder
        .pipe(app.gulp.dest(app.path.build.styles))
        //Refresh browser
        .pipe(app.plugins.browsersync.stream())
}