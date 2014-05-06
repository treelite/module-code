(function (global) {
    var app = global.app || {};
    
    app.start = function (name) {
        app.foo.hello(name);
    };

    global.app = app;
})(window);
