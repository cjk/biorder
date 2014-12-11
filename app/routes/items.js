import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('item');
  },

  actions: {
    deleteItem: function(item) {
      console.log('Deleting item:');
      console.log(item);

      item.destroyRecord();
    }
  }
});
