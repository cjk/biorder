import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr('string'),
  // a rev-attribute is needed by pouch-db
  rev  : DS.attr('string')
});
