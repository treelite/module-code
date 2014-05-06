define(function (require) {

    var foo = require('./foo');

    return {
        start: function (name) {
            foo.hello(name);
        }
    };

});
