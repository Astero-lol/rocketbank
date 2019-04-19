module.exports = ctx => ({
    plugins: [
        require('postcss-import')({ addDependencyTo: ctx.webpack, path: './src' }),
        require('postcss-cssnext')({ browsers: ['> 0.05%', 'IE 11'], cascade: false }),
        require('postcss-nested')
    ]
});
