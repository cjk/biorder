import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createItem: function() {
      var name = this.get('name');

      var item = this.store.createRecord('item', {
        name: name
      });

      item.save();
      Ember.Logger.debug("Saved an item:");
      Ember.Logger.debug(item);

      this.transitionTo('items');
    }
  }
});
