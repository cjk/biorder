import DS from 'ember-data';

export default DS.Model.extend({
  amount : DS.attr('number', {
    defaultValue: function() { return 1; }
  }),
  item   : DS.belongsTo('item'),
  order  : DS.belongsTo('order')
});
