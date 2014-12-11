var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var itemSchema   = new Schema({
	name: String,
  measuredIn: String
});

itemSchema.set('toJSON', {
  getters: true,
  transform: function(doc, ret, options) {
    ret['id'] = ret._id;
    delete ret._id;
    delete ret._v;

    return ret;
  }

});

module.exports = mongoose.model('Item', itemSchema);
