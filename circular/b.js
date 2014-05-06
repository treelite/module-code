define(function (require, exports) {
    // not run
    //var a = require('./a');

    return {
        start: function () {
            // can run
            require('a').log('hello world');
        }
    }

});
