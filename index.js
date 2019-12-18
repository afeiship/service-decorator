var slice = Array.prototype.slice;
var nxCamelize = require('@feizheng/next-camelize');

function requireTarget(inTarget) {
  var target = require('services/' + inTarget);
  return target.default || target;
}

module.exports = function(inClasses) {
  var _args = Array.isArray(inClasses) ? inClasses : slice.call(arguments);
  var args = _args.map(function(arg) {
    return requireTarget(arg);
  });

  return function(inTarget) {
    args.forEach(function(item, index) {
      inTarget.prototype['$' + nxCamelize(inClasses[index])] = item;
    });
  };
};
