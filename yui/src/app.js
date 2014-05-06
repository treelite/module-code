YUI.add(
    'myapp', 
    function (Y) {
        Y.app = {
            start: function (name) {
                Y.foo.hello(name);
            }
        };
    },
    '0.1.0',
    {
        requires: ['foo']
    }
);
