const webpack = require('webpack')
const path = require('path');
module.exports = {
    devServer:{
        host:"0.0.0.0",
        port:8080
    },
    lintOnSave:false//取消eslint 验证
}