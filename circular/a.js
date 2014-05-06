define(function (require) {
    var b = require('./b');

    return {
        start: function () {
            b.start();
        },
        
        log: function (msg) {
            alert(msg);
        }
    };
});
