const path = require('path');
const webpack = require('webpack');
const babiliPlugin = require('babili-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let plugins =[];

plugins.push( new HtmlWebpackPlugin({
    hash: true,
    minify: {
        html5:true,
        collapseWhitespace:true,
        removeComments:true,
    },
    filename: 'index.html',
    template: __dirname + '/main.html'
}))

plugins.push(new extractTextPlugin("styles.css"));

plugins.push(new webpack.ProvidePlugin({
    '$':'jquery/dist/jquery.js',
    'jQuery':'jquery/dist/jquery.js'
}));

plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name:'vendor',
    filename:'vendor.bundle.js'
}))


let SERVICE_URL = JSON.stringify('http://localhost:3000');
//quando a variável de ambiente NODE_ENV for production
//adicionamos aos plugins o babili-webpack para mimificar os arquivos de produção
//para a atribuição da variável de ambiente funcionar no windows usamos cross-env 
if(process.env.NODE_ENV == 'production'){
    
    SERVICE_URL = JSON.stringify('http://endereco-producao:3000');
    plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
    plugins.push(new babiliPlugin());
    plugins.push(new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
            discardComments:{
                removeAll: true
            }
        },
        canPrint: true
    }))
}

plugins.push(new webpack.DefinePlugin({
    SERVICE_URL
}));


module.exports = {
    //ponto de entrada - 1º modulo a carregar
    entry:{
        app: './app-src/app.js',
        vendor: ['jquery', 'bootstrap', 'reflect-metadata']
    },
    //saída onde sera gravado o bundle no final
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //usamos o Webpack Dev Server que possui o live reloading
        //com isso a pasta dist é criada em memória e precisamos atribuir um public path
        //publicPath:'dist'
    },
    //adicionamos a configuração module que pode ter várias rules
    module:{
        rules:[
            {
                //e cada rule usa um módulo específico quando aplicada
                //nesse caso usamos o loader do babel
                //ele testa todos os arquivos com a estansão .js fora do node_modules
                test: /\.js$/,
                exclude: '/node_modules',
                use: {
                    loader: 'babel-loader'
                }
            },
           {
                //nova regra para usar os loader do css
                test: /\.css$/,
                //aplica os loader da direita para esquerda separado pelo !
                //loader: 'style-loader!css-loader'
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            //novas regra para lidar com as fontes do bootstrap
            { 
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader' 
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml' 
            }     
        ]
    },
    plugins//: plugins
}