import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr('string'),
  measuredIn: DS.attr('string')
  // lineitem: DS.belongsTo('lineitem')
});
