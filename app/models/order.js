import DS from 'ember-data';

export default DS.Model.extend({
  createdAt : DS.attr('string', {
    defaultValue: function() { return new Date(); }
  }),
  lineitems     : DS.hasMany('lineitem', {embedded: true})
});
