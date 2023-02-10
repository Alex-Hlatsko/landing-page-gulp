//Imports
import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

//Import tasks
import { html } from './gulp/tasks/html.js';
import { styles } from './gulp/tasks/styles.js';
import { scripts } from './gulp/tasks/scripts.js';
import { libs } from './gulp/tasks/libs.js';
import { server } from './gulp/tasks/server.js';
import { images } from './gulp/tasks/images.js';
import { reset } from './gulp/tasks/reset.js';
import { fonts } from './gulp/tasks/fonts.js';

//Global variable
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

//Monitoring files
function watcher(){
    gulp.watch(app.path.watch.styles, styles)
    gulp.watch(app.path.watch.scripts, scripts)
    gulp.watch(app.path.watch.html, html)
    gulp.watch(app.path.watch.images, images)
}

//General tasks
const mainTasks = gulp.parallel(html, styles, scripts, images, fonts);

//Modes
const dev = gulp.series(reset, libs, mainTasks, gulp.parallel(server, watcher));
const build = gulp.series(reset, libs, mainTasks);

//Export mods
export { dev }
export { build }
gulp.task('default', dev)
