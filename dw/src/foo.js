(function (global) {
    var foo = global.app.foo || {};
    
    foo.hello = function (name) {
        alert('hello ' + name);
    };

    global.app.foo = foo;
})(window);
