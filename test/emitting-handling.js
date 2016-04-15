var assert = require('assert');
require('../');
var EventEmitter = require('events').EventEmitter;

describe('Event emitted be EventEmitter directly', function () {

  it('with 0 params should be handled with no params', function() {
    var okMessage = 'no params passed to the event handler';
    var handlerCalled = false;

    var emitter = new EventEmitter();

    emitter.on('event', function(next) {
      assert.ok(next);
      assert.ok(next instanceof Function);
      assert.equal(arguments.length, 1);
      handlerCalled = true;
      next(null, okMessage);
    });

    var emitted = emitter.emitAsync('event', function (err, message) {
      assert.ok(!err, 'Error occured: ' + (err&&err.message));
      assert.ok(message);
      assert.equal(message, okMessage);
      assert.ok(handlerCalled);
    });
    assert.ok(emitted === true);
  });

  it('with 1 param should be handled with 1 param', function() {
    var okMessage = '1 param passed to the event handler';
    var param1 = "param1";

    var emitter = new EventEmitter();

    emitter.on('event', function(_param1, next) {
      assert.ok(_param1);
      assert.equal(_param1, param1);
      assert.ok(next);
      assert.ok(next instanceof Function);
      assert.equal(arguments.length, 2);
      next(null, okMessage);
    });

    var emitted = emitter.emitAsync('event', param1, function (err, message) {
      assert.ok(!err, 'Error occured: ' + (err&&err.message));
      assert.ok(message);
      assert.equal(message, okMessage);
    });
    assert.ok(emitted === true);
  });

  it('with 2 params should be handled with 2 params', function() {
    var okMessage = '2 params passed to the event handler';
    var param1 = "param1";
    var param2 = "param2";

    var emitter = new EventEmitter();

    emitter.on('event', function(_param1, _param2, next) {
      assert.ok(_param1);
      assert.equal(_param1, param1);
      assert.ok(_param2);
      assert.equal(_param2, param2);
      assert.ok(next);
      assert.ok(next instanceof Function);
      assert.equal(arguments.length, 3);
      next(null, okMessage);
    });

    var emitted = emitter.emitAsync('event', param1, param2, function (err, message) {
      assert.ok(!err, 'Error occured: ' + (err&&err.message));
      assert.ok(message);
      assert.equal(message, okMessage);
    });
    assert.ok(emitted === true);
  });

  it('with 3 params should be handled with 3 params', function() {
    var okMessage = '3 params passed to the event handler';
    var param1 = "param1";
    var param2 = "param2";
    var param3 = "param3";

    var emitter = new EventEmitter();

    emitter.on('event', function(_param1, _param2, _param3, next) {
      assert.ok(_param1);
      assert.equal(_param1, param1);
      assert.ok(_param2);
      assert.equal(_param2, param2);
      assert.ok(_param3);
      assert.equal(_param3, param3);
      assert.ok(next);
      assert.ok(next instanceof Function);
      assert.equal(arguments.length, 4);
      next(null, okMessage);
    });

    var emitted = emitter.emitAsync('event', param1, param2, param3, function (err, message) {
      assert.ok(!err, 'Error occured: ' + (err&&err.message));
      assert.ok(message);
      assert.equal(message, okMessage);
    });
    assert.ok(emitted === true);
  });

  it('with 4 params should be handled with 4 params', function() {
    var okMessage = '4 params passed to the event handler';
    var param1 = "param1";
    var param2 = "param2";
    var param3 = "param3";
    var param4 = "param4";

    var emitter = new EventEmitter();

    emitter.on('event', function(_param1, _param2, _param3, _param4, next) {
      assert.ok(_param1);
      assert.equal(_param1, param1);
      assert.ok(_param2);
      assert.equal(_param2, param2);
      assert.ok(_param3);
      assert.equal(_param3, param3);
      assert.ok(_param4);
      assert.equal(_param4, param4);
      assert.ok(next);
      assert.ok(next instanceof Function);
      assert.equal(arguments.length, 5);
      next(null, okMessage);
    });

    var emitted = emitter.emitAsync('event', param1, param2, param3, param4, function (err, message) {
      assert.ok(!err, 'Error occured: ' + (err&&err.message));
      assert.ok(message);
      assert.equal(message, okMessage);
    });
    assert.ok(emitted === true);
  });

  it('with 5 params should be handled with 5 params', function() {
    var okMessage = '5 params passed to the event handler';
    var param1 = "param1";
    var param2 = "param2";
    var param3 = "param3";
    var param4 = "param4";
    var param5 = "param5";

    var emitter = new EventEmitter();

    emitter.on('event', function(_param1, _param2, _param3, _param4, _param5, next) {
      assert.ok(_param1);
      assert.equal(_param1, param1);
      assert.ok(_param2);
      assert.equal(_param2, param2);
      assert.ok(_param3);
      assert.equal(_param3, param3);
      assert.ok(_param4);
      assert.equal(_param4, param4);
      assert.ok(_param5);
      assert.equal(_param5, param5);
      assert.ok(next);
      assert.ok(next instanceof Function);
      assert.equal(arguments.length, 6);
      next(null, okMessage);
    });

    var emitted = emitter.emitAsync('event', param1, param2, param3, param4, param5, function (err, message) {
      assert.ok(!err, 'Error occured: ' + (err&&err.message));
      assert.ok(message);
      assert.equal(message, okMessage);
    });
    assert.ok(emitted === true);
  });

  it('with 6 params should be handled with 6 params', function() {
    var okMessage = '6 params passed to the event handler';
    var param1 = "param1";
    var param2 = "param2";
    var param3 = "param3";
    var param4 = "param4";
    var param5 = "param5";
    var param6 = "param6";

    var emitter = new EventEmitter();

    emitter.on('event', function(_param1, _param2, _param3, _param4, _param5, _param6, next) {
      assert.ok(_param1);
      assert.equal(_param1, param1);
      assert.ok(_param2);
      assert.equal(_param2, param2);
      assert.ok(_param3);
      assert.equal(_param3, param3);
      assert.ok(_param4);
      assert.equal(_param4, param4);
      assert.ok(_param5);
      assert.equal(_param5, param5);
      assert.ok(_param6);
      assert.equal(_param6, param6);
      assert.ok(next);
      assert.ok(next instanceof Function);
      assert.equal(arguments.length, 7);
      next(null, okMessage);
    });

    var emitted = emitter.emitAsync('event', param1, param2, param3, param4, param5, param6, function (err, message) {
      assert.ok(!err, 'Error occured: ' + (err&&err.message));
      assert.ok(message);
      assert.equal(message, okMessage);
    });
    assert.ok(emitted === true);
  });

  it('with 10 params should be handled with 10 params', function() {
    var okMessage = '10 params passed to the event handler';
    var param1 = "param1";
    var param2 = "param2";
    var param3 = "param3";
    var param4 = "param4";
    var param5 = "param5";
    var param6 = "param6";
    var param7 = "param7";
    var param8 = "param8";
    var param9 = "param9";
    var paramA = "paramA";

    var emitter = new EventEmitter();

    emitter.on('event', function(_param1, _param2, _param3, _param4, _param5, _param6, _param7, _param8, _param9, _paramA, next) {
      assert.ok(_param1);
      assert.equal(_param1, param1);
      assert.ok(_param2);
      assert.equal(_param2, param2);
      assert.ok(_param3);
      assert.equal(_param3, param3);
      assert.ok(_param4);
      assert.equal(_param4, param4);
      assert.ok(_param5);
      assert.equal(_param5, param5);
      assert.ok(_param6);
      assert.equal(_param6, param6);
      assert.ok(_param7);
      assert.equal(_param7, param7);
      assert.ok(_param8);
      assert.equal(_param8, param8);
      assert.ok(_param9);
      assert.equal(_param9, param9);
      assert.ok(_paramA);
      assert.equal(_paramA, paramA);
      assert.ok(next);
      assert.ok(next instanceof Function);
      assert.equal(arguments.length, 11);
      next(null, okMessage);
    });

    var emitted = emitter.emitAsync('event', param1, param2, param3, param4, param5, param6, param7, param8, param9, paramA, function (err, message) {
      assert.ok(!err, 'Error occured: ' + (err&&err.message));
      assert.ok(message);
      assert.equal(message, okMessage);
    });
    assert.ok(emitted === true);
  });

  it('should be handled with 1 param - handler has no specified params', function() {
    var okMessage = '1 param passed to the event handler';
    var param1 = "param1";

    var emitter = new EventEmitter();

    emitter.on('event', function() {
      assert.equal(arguments.length, 2);
      var _param1 = arguments[0];
      var next = arguments[1];
      assert.ok(_param1);
      assert.equal(_param1, param1);
      assert.ok(next);
      assert.ok(next instanceof Function);
      next(null, okMessage);
    });

    var emitted = emitter.emitAsync('event', param1, function (err, message) {
      assert.ok(!err, 'Error occured: ' + (err&&err.message));
      assert.ok(message);
      assert.equal(message, okMessage);
    });
    assert.ok(emitted === true);
  });

  it('should be handled with 1 param by 2 handlers', function() {
    var okMessage1 = 'handler1 processed';
    var okMessage2 = "handler2 processed";
    var param1 = "param1";

    var emitter = new EventEmitter();

    emitter.on('event', function() {
      assert.equal(arguments.length, 2);
      var _param1 = arguments[0];
      var next = arguments[1];
      assert.ok(_param1);
      assert.equal(_param1, param1);
      assert.ok(next);
      assert.ok(next instanceof Function);
      next(null, okMessage1);
    });

    emitter.on('event', function() {
      assert.equal(arguments.length, 2);
      var _param1 = arguments[0];
      var next = arguments[1];
      assert.ok(_param1);
      assert.equal(_param1, param1);
      assert.ok(next);
      assert.ok(next instanceof Function);
      next(null, okMessage2);
    });

    var emitted = emitter.emitAsync('event', param1, function (err, results) {
      assert.ok(!err, 'Error occured: ' + (err&&err.message));
      assert.ok(results);
      assert.equal(results.length, 2);
      assert.equal(results[0], okMessage1);
      assert.equal(results[1], okMessage2);
    });
    assert.ok(emitted === true);
  });

  it('should be handled with exception passed to the callback', function() {
    var errMessage = 'Sone error message';

    var emitter = new EventEmitter();

    emitter.on('event', function(next) {
      next(new Error(errMessage));
    });

    var emitted = emitter.emitAsync('event', function (err, message) {
      assert.ok(err);
      assert.ok(err.message);
      assert.equal(err.message, errMessage);
    });
    assert.ok(emitted === true);
  });

});

describe("EventEmitter.emitAsync", function() {

  it('should not emit the event if no handlers assigned', function() {
    var emitter = new EventEmitter();
    var emitted = emitter.emitAsync('event', function (err, message) {
      assert.ok(false, 'The callback should not be called if no handler processed.');
    });
    assert.ok(emitted === false);
  });

  it("should not emit the event if it was applied for object that has no _events property", function() {

    var falseEmiiter = {};
    var emitted = EventEmitter.prototype.emitAsync.call(falseEmiiter, 'event', function () {
      assert.ok(false, 'The callback should not be called if no handler processed.');
    });
    assert.ok(emitted === false);

  });

})
