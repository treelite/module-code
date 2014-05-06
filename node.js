// 引用模块
var fs = require('fs');

var fileName = 'hi';

// 导出模块接口
exports.init = function () {
    fs.writeFileSync(fileName, 'hello world', 'utf-8');
};
