import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('item');
  },

  actions: {
    deleteItem: function(item) {
      item.destroyRecord().then(function() {
        console.log('item was deleted!');
      });
    }
  }
});
