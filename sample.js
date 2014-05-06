function volidate(form) {
    var pass = true;

    ....

    return pass;
}

var namespace = {};

namespace.validate = function (form) {
    var pass = true;

    ....

    return pass;
};

namespace('foo.bar').validate = function (form) {
    var pass = true;

    ....

    return pass;
};

(function (global) {

    var namespace = global.namespace || {};

    namespace.validate = function (form) {
        var pass = true;

        ...

        return pass;
    };

    global.namespace = namespace;

})(window);

define(function (require) {

    return {
        start: function () {
            require('business1').init();
            require('business2').init();
            require('business3').init();
            require('business4').init();
            ...
        };
    };

});

// 完整定义方式
define('app', ['foo'], function (foo) {
    ...
});

// 推荐定义方式
define(function (require) {
    ...
});

// 使用返回值定义模块
define(function (require) {
    var obj = {};
    ...
    return obj;
});

// 使用exports参数定义模块
define(function (require, exports, module) {
    exports.hello = function () {
        ...
    };
});

// 使用module参数定义模块
define(function (require, exports, module) {
    module.exports = function () {
        ...
    };
});

define('abc/foo/index', function (require) {
    // 相对引用
    // abc/foo/bar
    var bar = require('./bar');
    
    // 相对引用
    // abc/bar
    var bar = require('../bar');

    // 顶级引用
    // main
    var main = require('main');
    ...
});

require(['app'], function (app) {
    app.start('amd');
});

// 设置模块根路径为./src
require.config({
    baseUrl: 'src'
});

// 加载app模块
// 实际加载文件为：./src/app.js
require(['app'], function (app) {
    app.start();
});

require.config({
    baseUrl: 'src',
    // 路径相对于`baseUrl`而言
    paths: {
        'util': 'common/util'
    }
});

// 加载util模块
// 实际加载文件为：./src/common/util
require(['util'], function (util) {
    ...
});

require.config({
    baseUrl: 'src',
    packages: [
        {
            // 包名称
            name: 'saber-dom',
            // 包路径，相对与`baseUrl`
            location: '../dep/saber-dom/0.4.0/src',
            // 指定入口模块名称
            main: 'main'
        }
    ];
});

// 引用了saber-dom包与saber-dom包下的css模块
// 实际加载的文件为
// ./dep/saber-dom/0.4.0/src/main.js
// ./dep/saber-dom/0.4.0/src/css.js
require(['saber-dom', 'saber-dom/css'], function (dom, css) {
    ...
});

// bar.js
define('bar/foo', function () {
    ...
})

// index.html
require(['bar'], function (bar) {
    ...
});

// 显式依赖声明
define(['foo'], function (foo) {
    ...
});

// 隐式依赖声明
define(function (require) {
    var foo = require('foo');
    ...
});

// a.js
define(function (require) {
    // 引用b模块
    var b = require('./b');
    return {
        start: function () {
            // 调用b方法
            b.start();
        },
        log: function (msg) {
            alert(msg);
        }
    };
});

// b.js
define(function (require) {
    // 引用a模块
    var a = require('./a');
    return {
        start: function () {
            // 调用a方法
            a.log('hello circular');
        }
    };
});

// b.js
define(function (require) {

    return {
        start: function () {
            // 引用a模块
            var a = require('./a');
            // 调用a方法
            a.log('hello circular');
        }
    };

});
