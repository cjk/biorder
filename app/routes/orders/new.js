import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.get('store').createRecord('order');
  },

  afterModel: function() {
    var self = this;

    // Retrieve all grocery-items from the store and put them in a
    // controller-variable that is used in a template to display all available
    // items to put on an order
    this.store.find('item').then(resolve, reject);

    function resolve(items) {
      self.get('controller').set('availableItems', items);
    }
    function reject(error) {
      console.error('Error retrieving items:' + error);
    }

  },

  actions: {
    addToOrder: function(item) {
      var order = this.get('controller.model');
      order.get('items').pushObject(item);
      alert('Item added!');
    }
  }
});
