(function () {

    // 声明命名空间
    goog.provide('app');

    // 添加依赖
    goog.require('app.foo');

    app.start = function (name) {
        app.foo.hello(name);
    };

})();
