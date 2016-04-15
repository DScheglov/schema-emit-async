var assert = require('assert');
var mongoose = require('mongoose'); require('../');
var db = require('./tools/models');

describe('Event emitted by mongoose.Document', function () {

  function restoreQueue(queue) {
    if (typeof queue.__defLength === 'undefined') {
      queue.__defLength = queue.length;
    } else if (queue.__defLength < queue.length) {
      queue = queue.slice(0, queue.__defLength);
      queue.__defLength = queue.length;
    }
    return queue;
  }

  beforeEach(function () {
    db.Vector2DSchema.callQueue = restoreQueue(db.Vector2DSchema.callQueue);
    db.Vector3DSchema.callQueue = restoreQueue(db.Vector3DSchema.callQueue);
  });

  it('with 0 params should be handled with no params', function() {
    var okMessage = 'no params passed to the event handler';
    var handlerCalled = false;
    db.Vector2DSchema.onAsync('event', function(next) {
      assert.ok(this instanceof db.Vector2D);
      assert.ok(next);
      assert.ok(next instanceof Function);
      assert.equal(arguments.length, 1);
      handlerCalled = true;
      next(null, okMessage);
    });

    var vector = new db.Vector2D({x:1, y:1});
    var emitted = vector.emitWithNoParams('event', function (err, message) {
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
    db.Vector2DSchema.onAsync('event', function(_param1, next) {
      assert.ok(_param1);
      assert.equal(_param1, param1);
      assert.ok(next);
      assert.ok(next instanceof Function);
      assert.equal(arguments.length, 2);
      next(null, okMessage);
    });

    var vector = new db.Vector2D({x:1, y:1});
    var emitted = vector.emitWith1Param('event', param1, function (err, message) {
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
    db.Vector2DSchema.onAsync('event', function(_param1, _param2, next) {
      assert.ok(_param1);
      assert.equal(_param1, param1);
      assert.ok(_param2);
      assert.equal(_param2, param2);
      assert.ok(next);
      assert.ok(next instanceof Function);
      assert.equal(arguments.length, 3);
      next(null, okMessage);
    });

    var vector = new db.Vector2D({x:1, y:1});
    var emitted = vector.emitWith2Params('event', param1, param2, function (err, message) {
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
    db.Vector2DSchema.onAsync('event', function(_param1, _param2, _param3, next) {
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

    var vector = new db.Vector2D({x:1, y:1});
    var emitted = vector.emitWith3Params('event', param1, param2, param3, function (err, message) {
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
    db.Vector2DSchema.onAsync('event', function(_param1, _param2, _param3, _param4, next) {
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

    var vector = new db.Vector2D({x:1, y:1});
    var emitted = vector.emitWith4Params('event', param1, param2, param3, param4, function (err, message) {
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
    db.Vector2DSchema.onAsync('event', function(_param1, _param2, _param3, _param4, _param5, next) {
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

    var vector = new db.Vector2D({x:1, y:1});
    var emitted = vector.emitWith5Params('event', param1, param2, param3, param4, param5, function (err, message) {
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
    db.Vector2DSchema.onAsync('event', function(_param1, _param2, _param3, _param4, _param5, _param6, next) {
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

    var vector = new db.Vector2D({x:1, y:1});
    var emitted = vector.emitWith6Params('event', param1, param2, param3, param4, param5, param6, function (err, message) {
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
    db.Vector2DSchema.onAsync('event', function(_param1, _param2, _param3, _param4, _param5, _param6, _param7, _param8, _param9, _paramA, next) {
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

    var vector = new db.Vector2D({x:1, y:1});
    var emitted = vector.emitWith10Params('event', param1, param2, param3, param4, param5, param6, param7, param8, param9, paramA, function (err, message) {
      assert.ok(!err, 'Error occured: ' + (err&&err.message));
      assert.ok(message);
      assert.equal(message, okMessage);
    });
    assert.ok(emitted === true);
  });

  it('should be handled with 1 param - handler has no specified params', function() {
    var okMessage = '1 param passed to the event handler';
    var param1 = "param1";
    db.Vector2DSchema.onAsync('event', function() {
      assert.equal(arguments.length, 2);
      var _param1 = arguments[0];
      var next = arguments[1];
      assert.ok(_param1);
      assert.equal(_param1, param1);
      assert.ok(next);
      assert.ok(next instanceof Function);
      next(null, okMessage);
    });

    var vector = new db.Vector2D({x:1, y:1});
    var emitted = vector.emitWith1Param('event', param1, function (err, message) {
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
    db.Vector2DSchema.onAsync('event', function() {
      assert.equal(arguments.length, 2);
      var _param1 = arguments[0];
      var next = arguments[1];
      assert.ok(_param1);
      assert.equal(_param1, param1);
      assert.ok(next);
      assert.ok(next instanceof Function);
      next(null, okMessage1);
    });

    db.Vector2DSchema.onAsync('event', function() {
      assert.equal(arguments.length, 2);
      var _param1 = arguments[0];
      var next = arguments[1];
      assert.ok(_param1);
      assert.equal(_param1, param1);
      assert.ok(next);
      assert.ok(next instanceof Function);
      next(null, okMessage2);
    });

    var vector = new db.Vector2D({x:1, y:1});
    var emitted = vector.emitWith1Param('event', param1, function (err, results) {
      assert.ok(!err, 'Error occured: ' + (err&&err.message));
      assert.ok(results);
      assert.equal(results.length, 2);
      assert.equal(results[0], okMessage1);
      assert.equal(results[1], okMessage2);
    });
    assert.ok(emitted === true);
  });

  it('should not be handled if no handlers assigned', function() {
    var vector = new db.Vector2D({x:1, y:1});
    var emitted = vector.emitWith1Param('event', function (err, message) {
      assert.ok(false, 'The callback should not be called if no handler processed.');
    });
    assert.ok(emitted === false);
  });

  it('should be handled with exception passed to the callback', function() {
    var errMessage = 'Sone error message';
    db.Vector2DSchema.onAsync('event', function(next) {
      next(new Error(errMessage));
    });

    var vector = new db.Vector2D({x:1, y:1});
    var emitted = vector.emitWith1Param('event', function (err, message) {
      assert.ok(err);
      assert.ok(err.message);
      assert.equal(err.message, errMessage);
    });
    assert.ok(emitted === true);
  });


  it('inside an inherited method should be handle by instance of child Shema', function() {
    var okMessage = 'handler processed';

    db.Vector3DSchema.onAsync('event', function(next) {
      assert(this instanceof db.Vector3D);
      next(null, okMessage);
    });

    var vector = new db.Vector3D();
    var emitted = vector.emitWithNoParams('event', function(err, message) {
      assert.ok(!err, 'Error occured: ' + (err&&err.message));
      assert.ok(message);
      assert.equal(message, okMessage);
    });
    assert.ok(emitted === true);

    var vector2 = new db.Vector2D();
    var emitted2 = vector2.emitWithNoParams('event', function(err, message) {
      assert.ok(false, 'The callback should not be called if no handler processed.');
    });
    assert.ok(emitted2 === false);
  });

  it('on instance of child Schema should be handle by handlers assigned on parent and child schemas', function() {
    var okMessage_Parent = 'Vector2D processed the parent-event';
    var okMessage_Child = 'Vector3D processed the parent-event';


    /**  WARNING -------------------------------------------------------------
     *   The event handlers are inherited during the discriminator creation
     *   So, the handlers assgined on the parent Schema after the discriminator
     *   created are not reflected on the child schema.
     *
     *   This test case uses the handlers defined in the ./tools/models.js
     */

    var vector = new db.Vector3D();
    var emitted = vector.emitWithNoParams('parent-event', function(err, results) {
      assert.ok(!err, 'Error occured: ' + (err&&err.message));
      assert.ok(results);
      assert.equal(results.length, 2);
      assert.equal(results[0], okMessage_Parent);
      assert.equal(results[1], okMessage_Child);
    });
    assert.ok(emitted === true);

    var vector2 = new db.Vector2D();
    var emitted2 = vector2.emitWithNoParams('parent-event', function(err, results) {
      assert.ok(!err, 'Error occured: ' + (err&&err.message));
      assert.ok(results);
      assert.ok(typeof(results) !== "array");
      assert.equal(results, okMessage_Parent);
    });
    assert.ok(emitted2 === true);
  });

});
