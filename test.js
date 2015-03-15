'use strict';

var test = require('tape');
var object_clear = require('./');

test('clears', function(t) {
  var obj = {foo: 1, bar: 2};
  object_clear(obj);
  t.deepEqual(Object.keys(obj), []);
  t.end();
});

test('same object', function(t) {
  var parent = {child: {foo: 1, bar: 2}};
  var child = parent.child;
  object_clear(child);
  child.baz = 3;
  t.deepEqual(Object.keys(parent.child), ['baz']);
  t.equal(parent.child.baz, 3);
  t.end();
});

// for contrast, show why we have object_clear instead of just assigning to a new {} object
var bad_object_clear = function() {
  return {};
};
test('not clear not same object', function(t) {
  var parent = {child: {foo: 1, bar: 2}};
  var child = parent.child;
  bad_object_clear(child);
  child.baz = 3;
  //t.deepEqual(Object.keys(parent.child), ['baz']);
  t.deepEqual(Object.keys(parent.child), ['foo', 'bar', 'baz']);
  t.equal(parent.child.baz, 3);
  t.end();
});
