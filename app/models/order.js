import DS from 'ember-data';

export default DS.Model.extend({
  lineitems     : DS.hasMany('lineitem'),
  createdAt : DS.attr('string', {
    defaultValue: function() { return new Date(); }
  })
});
