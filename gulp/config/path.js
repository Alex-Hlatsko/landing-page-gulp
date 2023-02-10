//Get name folder
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

//General paths
const srcFolder = "./src";
const buildFolder = "./app";

//All paths
export const path = {
    src : {
        html: [`${srcFolder}/_html/**/*.html`,`!${srcFolder}/_html/bit_html/*.html`],
        styles: `${srcFolder}/scss/styles.scss`,
        scripts: `${srcFolder}/js/*.js`,
        libs: `${srcFolder}/libs/**/*.*`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,gif,png,webp,jfif}`,
        svg: `${srcFolder}/images/**/*.svg`,
        fonts: `${srcFolder}/fonts/**/*.ttf`
    },
    build : {
        html: buildFolder,
        styles: `${buildFolder}/css`,
        scripts: `${buildFolder}/js`,
        libs: `${buildFolder}/libs`,
        images: `${buildFolder}/images`,
        fonts: `${buildFolder}/fonts`
    },
    watch : {
        html: `${srcFolder}/_html/**/*.html`,
        styles: `${srcFolder}/scss/*.scss`,
        scripts: `${srcFolder}/js/*.js`,
        images: `${srcFolder}/images/**/*.{jpg, jpeg, gif, png, webp, svg}`
    },
    srcFolder : srcFolder,
    buildFolder : buildFolder,
    clean: buildFolder,
    rootFolder: rootFolder
}