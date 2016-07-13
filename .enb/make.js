var enbBemTechs = require('enb-bem-techs'),
    borschikTech = require('enb-borschik/techs/borschik'),
    fileMerge = require('enb/techs/file-merge'),
    browserJs = require("enb-js/techs/browser-js");

module.exports = function (config) {
    var isProd = process.env.YENV === 'production';

    config.nodes('*.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [require('enb/techs/file-provider'), { target: '?.bemjson.js' }],
            [enbBemTechs.files],
            [enbBemTechs.deps],
            [enbBemTechs.bemjsonToBemdecl],
            // bh
            [require('enb-bh/techs/bh-commonjs'), {
                bhOptions: {
                    jsAttrName: 'data-bem',
                    jsAttrScheme: 'json'
                }
            }],
            // html
            [require('enb-bh/techs/bemjson-to-html')],
            // tidy html
            [require('enb-beautify/techs/enb-beautify-html'), {
                sourceTarget: '?.html',
                destTarget: '?.tidy.html'
            }],
            // borschik
            // [borschikTech, { 
            //     source: '?.css', 
            //     target: '?.min.css', 
            //     tech: 'cleancss', 
            //     freeze: true, 
            //     minify: isProd 
            // }]

            [browserJs, {
                includeYM: true
            }],
            [fileMerge, {
                target: '?.js',
                sources: ['?.browser.js']
            }],
            [borschikTech, { source: '?.js', target: '?.min.js', minify: isProd }],
            [borschikTech, { source: '?.css', target: '?.min.css', minify: isProd }]
        ]);

        nodeConfig.addTargets([
            '?.min.css',
            '?.min.js',
            '?.bh.js',
            '?.html',
            '?.tidy.html',

        ]);
    });
    
    config.nodes('*desktop.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, {
                levels: [
                    { path: 'libs/bem-core/common.blocks', check: false },
                    { path: 'libs/bem-core/desktop.blocks', check: false },
                    'common.blocks',
                    'desktop.blocks'
                ]
            }],
            // css
            [require('enb-stylus/techs/stylus'), {
                target: '?.css',
                autoprefixer: {
                    browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
                }
            }]
        ]);
    });
};


