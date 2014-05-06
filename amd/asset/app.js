define('foo', function () {
    return {
        hello: function (name) {
            alert('hello ' + name);
        }
    };
});

define('app', ['require', 'foo'], function (require) {
    var foo = require('./foo');
    return {
        start: function (name) {
            foo.hello(name);
        }
    };
});


