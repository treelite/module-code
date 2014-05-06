define(function (require, exports, module) {
    var foo = require('./foo');

    exports.bar = function () {
        ...
    };
});

seajs.use('app', function (app) {
    app.start();
});
