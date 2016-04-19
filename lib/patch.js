var mongoose;
try {
  mongoose = require('mongoose');
} catch(e) {
  mongoose = null;
}

var EventEmitter = require('events');
var async = require('async');

/**
 * EventEmitter.prototype.mitAsync - emits the event specified by event param
 *
 * @param  {String} event        The event to be emitted
 * @param  {...*}                Zero or any number of params that will be passed
 * to the event handlers
 * @param  {Function} callback   The function which is called when all handlers have
 * finished or some handler have fired the exception
 * @returns {Boolean}            Returns true if there is at least one handler,
 * otherwise returns false
 */
EventEmitter.prototype.emitAsync = function emitAsync() {
  var events, handlers, args, type, callback, self, runner;

  events = this._events;
  if (!events) return false;

  event = arguments[0];
  self = this;
  callback = arguments[arguments.length - 1];
  args = Array.prototype.slice.call(arguments, 1, -1);

  handlers = events[event];
  if (!handlers) return false;

  handlers = Array.isArray(handlers) ? handlers : [handlers];

  switch (args.length) {
    case 0: runner = callFn0; break;
    case 1: runner = callFn1; break;
    case 2: runner = callFn2; break;
    case 3: runner = callFn3; break;
    case 4: runner = callFn4; break;
    case 5: runner = callFn5; break;
    default: runner = applyFn;
  }

  handlers = handlers.map(function (h) { return runner.bind(null, h)});

  async.series(handlers, callback);
  return true;

  function applyFn(fn, next) {
    var _args;
    _args = args.slice();
    _args.push(next);
    return fn.apply(self, _args);
  }

  function callFn0(fn, next) {
    return fn.call(self, next);
  }

  function callFn1(fn, next) {
    return fn.call(self, args[0], next);
  }

  function callFn2(fn, next) {
    return fn.call(self, args[0], args[1], next);
  }

  function callFn3(fn, next) {
    return fn.call(self, args[0], args[1], args[2], next);
  }

  function callFn4(fn, next) {
    return fn.call(self, args[0], args[1], args[2], args[3], next);
  }

  function callFn5(fn, next) {
    return fn.call(self, args[0], args[1], args[2], args[3], args[4], next);
  }

}

if (mongoose) {
  /**
   * Schema.prototype.onAsync - adds the asynchronious handler for event
   *
   * @param  {string} event     event that should be handled
   * @param  {Function} fn      the handler of the event
   * @returns {mongoose.Schema}  the Schema
   */
  mongoose.Schema.prototype.when = function(event, fn) {

    return this.queue('on', [event, function() {
      var doc = arguments[0];
      var args = Array.prototype.slice.call(arguments, 1);
      fn.apply(doc, args);
    }]);

  };


  /**
   * Document.prototype.emitAsync - the wrapper method of EventEmitter that
   * is attached to the mongoose.Document
   */
  mongoose.Document.prototype.emitAsync = function() {
    return this.$__.emitter.emitAsync.apply(this.$__.emitter, arguments);
  }
}
module.exports = exports = {};
