(function () {

    // 声明命名空间
    goog.provide('app.foo');

    app.foo.hello = function (name) {
        alert('hello ' + name);
    };

})();
