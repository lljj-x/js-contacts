module.exports = {
    plugins: [
        require('postcss-mixins'),
        require('postcss-nested'),
        require('postcss-color-mod-function'),
        require('postcss-units')({
            size: 75,
            fallback: false,
            precision: 4
        }),
        require('postcss-cssnext')({
            warnForDuplicates: false,
            browsers: ['> 1%', 'ie > 8', 'android 4', 'iOS 6']
        })
    ]
};
