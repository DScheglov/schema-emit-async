var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Vector2DSchema = new Schema({
  x: Number,
  y: Number
});

Vector2DSchema.onAsync("parent-event", function(next) {
  next(null, "Vector2D processed the parent-event");
});

Vector2DSchema.methods.emitWithNoParams = function(event, cb) {
  return this.emitAsync(event, this, cb);
};

Vector2DSchema.methods.emitWith1Param = function(event, param, cb) {
  return this.emitAsync(event, this, param, cb);
};

Vector2DSchema.methods.emitWith2Params = function(event, param1, param2, cb) {
  return this.emitAsync(event, this, param1, param2, cb);
};

Vector2DSchema.methods.emitWith3Params = function(
  event, param1, param2, param3, cb
) {
  return this.emitAsync(event, this, param1, param2, param3, cb);
};

Vector2DSchema.methods.emitWith4Params = function(
  event, param1, param2, param3, param4, cb
) {
  return this.emitAsync(event, this, param1, param2, param3, param4, cb);
};

Vector2DSchema.methods.emitWith5Params = function(
  event, param1, param2, param3, param4, param5, cb
) {
  return this.emitAsync(event, this, param1, param2, param3, param4, param5, cb);
};

Vector2DSchema.methods.emitWith6Params = function(
  event, param1, param2, param3, param4, param5, param6, cb
) {
  return this.emitAsync(event, this, param1, param2, param3, param4, param5, param6, cb);
};

Vector2DSchema.methods.emitWith10Params = function(
  event, param1, param2, param3, param4, param5, param6,
  param7, param8, param9, param10, cb
) {
  return this.emitAsync(
    event, this, param1, param2, param3, param4, param5, param6,
    param7, param8, param9, param10, cb
  );
};

var Vector3DSchema = new Schema({
  z: Number
});

Vector3DSchema.onAsync('parent-event', function(next) {
  next(null, "Vector3D processed the parent-event")
})

Vector3DSchema.methods.emit0Params = function (event, cb) {
  return this.emitAsync(event, cb);
}

var Vector2D = mongoose.model('Vector2D', Vector2DSchema);
var Vector3D = Vector2D.discriminator('Vector3D', Vector3DSchema);

module.exports = exports = {
  Vector2DSchema: Vector2DSchema,
  Vector3DSchema: Vector3DSchema,
  Vector2D: Vector2D,
  Vector3D: Vector3D
}
