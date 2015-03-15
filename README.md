# object-clear

Delete all properties on an object

Usage:

    var object_clear = require('object-clear');

    var obj = {foo: 1, bar: 2};
    object_clear(obj); // obj is now '{}'

Useful when you want to mutate an existing object to remove all of
its properties without replacing it.

Contrast with assigning to `{}`, which creates a new object.

## See also

* ES6 `Object.assign`

## License

MIT

