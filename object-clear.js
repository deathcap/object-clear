'use strict';

module.exports = function(obj) {
  for (var prop in obj) {
    delete obj[prop];
  }
};
