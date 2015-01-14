import Ember from 'ember';

// Abstract base route with shared functionality for new- and edit-behaviour.
export default Ember.Route.extend({

  controllerName: 'OrdersEdit',

  afterModel: function() {
    var self = this;

    function resolve(items) {
      self.set('availableItems', items);
    }
    function reject(error) {
      console.error('Error retrieving items:' + error);
    }

    // Retrieve all grocery-items from the store and put them in a
    // controller-variable that is used in a template to display all available
    // items to put on an order
    return this.store.find('item').then(resolve, reject);

  },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('availableItems', this.get('availableItems'));
  },

  actions: {
    addToOrder: function(item) {
      var order = this.get('controller.model');
      var lineitem = this.store.createRecord('lineitem');

      console.log('Adding item <' + item.get('name') + '> to current order.');
      lineitem.set('item', item);
      order.get('lineitems').pushObject(lineitem);
    },
    removeFromOrder: function(lineitem) {
      var order = this.get('controller.model');

      console.log('Removing item <' + lineitem.get('item.name') + '> from current order.');
      order.get('lineitems').removeObject(lineitem);
    }

  }
});
