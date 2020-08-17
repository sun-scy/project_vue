const path = require('path');
//__dirname 当前文件所在的目录 : layout
function resolve (dir) {
    return path.join(__dirname, dir)
}


module.exports={
  
    lintOnSave:false,
    devServer:{
        port:5000,
        open:true,
        proxy: {
            '/api': {
                target: 'https://api.rencaiyoujia.cn',
                pathRewrite: { '^/api': '' },
                ws: false,
                changeOrigin: true
              }
          }
    },
    configureWebpack:{
        resolve: {
            alias: {
                'components': resolve('src/components'),
                'pages': resolve('src/pages'),
            }
        }
    },

}