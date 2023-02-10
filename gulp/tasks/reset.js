export const  reset = () => {
    //Delete app folder
    return app.plugins.del(app.path.clean)
}