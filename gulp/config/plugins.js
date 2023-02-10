import concat from 'gulp-concat';               //for renaming files
import uglify from 'gulp-uglify-es';            //for compressing JS
import fileinclude from 'gulp-file-include';    //for building HTML
import browsersync from 'browser-sync';         //for Browser
import imagemin from 'gulp-imagemin';           //for compressing IMAGE
import newer from 'gulp-newer';                 //for checking new files
import del from 'del';                          //for deleting
import tt2woff2 from 'gulp-ttf2woff2';          //for ttf -> woff2
import ifPlugin from 'gulp-if';                 //for difference mods

//All plugins
export const plugins = {
    concat: concat,
    uglify: uglify.default,
    fileinclude: fileinclude,
    browsersync: browsersync,
    imagemin: imagemin,
    newer: newer,
    del: del,
    tt2woff2: tt2woff2,
    if: ifPlugin
}
