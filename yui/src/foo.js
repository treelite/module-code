YUI.add(
    'foo', 
    function (Y) {
        Y.foo = {
            hello: function (name) {
                alert('hello ' + name);
            }
        }
    }
);
