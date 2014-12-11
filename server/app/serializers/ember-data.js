var _ = require('lodash');

module.exports = {
  collection: function(data) {
    return _.map(data, function(entity) {
      // TODO: Transforming the mongoose-properties is duplicated (see
      // item-schema #transform) but calling #toJSON for all array-member is not
      // much better.
      entity.id = entity._id;
      delete entity._id;
      // delete entity.__v;
      return entity;
    });
  }
};
