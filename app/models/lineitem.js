import DS from 'ember-data';

export default DS.Model.extend({
  item   : DS.belongsTo('item'),
  amount : DS.attr('number', {
    defaultValue: function() { return 1; }
  }),
  order  : DS.belongsTo('order')
});
