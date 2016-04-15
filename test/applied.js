var assert = require('assert');
var mongoose = require('mongoose'); require('../');
var EventEmitter = require('events').EventEmitter;

var Schema = mongoose.Schema;
var Document = mongoose.Document;

describe("events.EventEmitter", function () {

  it("should have the =emitAsync= method", function () {
    var method = EventEmitter.prototype.emitAsync;
    assert.ok(method);
    assert.ok(method instanceof Function);
  })

})

describe("mongoose.Schema", function() {

  it("should have the =onAsync= method", function () {
    var method = Schema.prototype.onAsync;
    assert.ok(method);
    assert.ok(method instanceof Function);
  })

})

describe("mongoose.Document", function() {

  it("should have the =emitAsync= method", function () {
    var method = Schema.prototype.emitAsync;
    assert.ok(method);
    assert.ok(method instanceof Function);
  })

})
