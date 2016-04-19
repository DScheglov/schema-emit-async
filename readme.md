## Patch for Events.EventEmitter, Mongoose.Document, Mongoose.Schema

The patch adds methods to mentioned above classes that allow to emit events and handle them by functions with callback.

The original **EventEmitter.emit** also supports handling by functions with callback, but the key feature of method **EventEmitter.emitAsync** added by this patch is that callback function specified in the method call will be called after all handlers processed.

--------------------
### Installation

```shell
npm install shema-emit-async
```

### Development and testing
```shell
git clone https://github.com/DScheglov/schema-emit-async.git
npm install
npm test
```
--------------------
### Description

The patch adds the following methods:

1. [**events.EventEmitter.prototype.emitAsync**](#EE.eA) - emits event and calls callback after all handlers processed

2. [**mongoose.Document.prototype.emitAsync**](#mD.eA) - duck-style inheritance of EventEmitter.eventAsync -- allows to emit event and pass one or more params to the handlers

3. [**mongoose.Schema.prototype.onAsync**](#mS.oA) -- adds handler as function with callback that binds to the Documents emitted the event

-----------
#### EventEmitter#emitAsync(event, ..., callback) <a name="EE.eA"></a>

Emits the event specified by `event` parameter and calls the `callback` function after all handlers processed

**Parameters**:
 - **event**: `String`, The event to be emitted
 - **...**: `any type`, zero or any number of parameters that will be passed
to the event handlers.
 - **callback**: `Function`, The function which is called when all handlers have finished or some handler have fired the exception

 - **Returns**: `Boolean`, Returns true if there is at least one handler,
otherwise returns false

#### callback(err, results)

**Parameters**:

- **err**: `Error|*`, the exception raised in one of handlers. The handler raised the exception stops the further event handling. If no exception was thrown the **err** is `null` or `undefined`.
- **results**: `Array`, the array of results passed by each handler to the `next` function

#### Example:
```javascript
require('schema-emit-async');
var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('some-event', function(next) {
  console.log('Hello world!!!');
  next(null, 'The first handler processed.');
});
....
....
emitter.on('some-event', function(next) {
  console.log('Hello world again!!!');
  next(null, 'The second handler processed.');
});
....
....
emitter.emitAsync('some-event', function (err, results) {
  console.log('Error: %s', err&&err.message || 'no errors');
  console.log('Results: "%s"', results.join('" & "'));
});

```
Output:
```shell
Hello world!!!
Hello world again!!!
Error: no errors
Results: "The first handler processed." & "The second handler processed."
```

Instead of the Example above the code uses the original **EventEmitter.emit**:
```javascript
var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('some-event', function(next) {
  console.log('Hello world!!!');
  next(null, 'The first handler processed.');
});
....
....
emitter.on('some-event', function(next) {
  console.log('Hello world again!!!');
  next(null, 'The second handler processed.');
});
....
....
emitter.emit('some-event', function (err, results) {
  console.log('Error: %s', err&&err.message || 'no errors');
  console.log('Results: "%s"', results);
});

```
produces the following output:

```shell
Hello world!!!
Error: no errors
Results: "The first handler processed."
Hello world again!!!
Error: no errors
Results: "The second handler processed."
```
----------------------
### Document#emitAsync() <a name="mD.eA"></a>

Document.prototype.emitAsync - the wrapper method of EventEmitter that
is attached to the mongoose.Document

see: [EventEmitter#emitAsync](#EE.eA)

------------------
### Schema#when(event, fn) <a name="mS.oA"></a>

Schema.prototype.when - adds the asynchronious handler for event and binds the handler to the first arguments passed in emitAsync call.
The difference between Schema.prototype.on and Schema.prototype.when is method on attaches the handler to the Schema that is an instanceof EventEmitter, instead of method when adds listener to the internal EventEmitter of the Document instance. 

**Parameters**:

- **event**: `string`, event that should be handled
- **fn**: `function`, the `handler` of the event

- **Returns**: `mongoose.Schema`, the Schema

#### handler(..., next)

**Parameters**:
- **...**: `any`, the zero or more parameters passed to the handler in a emitAsync call, excluding the first arguments that is available in the handler as `this`.
- **next**: `Function` - the callback that should be called after handler ends

#### Example:
```javascript
require('schema-emit-async');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var xSchema = new Schema({
  x: Number
});

xSchema.path('x').set(function (v) {
  if (v === 0) this.emitAsync("x===0", this, v, function(err) {
    console.log(err&&err.message || "All handlers processed");
  });
  console.log("x = %s", v);
  return v;
})

var xySchema = new Schema({
  y: Number
});

xySchema.when('x===0', function (v, next) {
  console.dir(arguments);
  console.log("Current value of x is <%s> and then it will be <%s>", this.x, v);
  next();
});

var xModel = mongoose.model('xModel', xSchema);
var xyModel = xModel.discriminator('xyModel', xySchema);

var X = new xModel({x:2});
var XY = new xyModel({x: 2, y: 3});

X.x = 3;
X.x = 0;
XY.x = 5;
XY.x = 0;
XY.x = 7;
```
Output:
```shell
x = 2
x = 2
x = 3
x = 0
x = 5
{ '0': 0, '1': [Function] }
Current value of x is <5> and then it will be <0>
All handlers processed
x = 0
x = 7
```
