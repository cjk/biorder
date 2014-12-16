import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.get('store').createRecord('item');
  },

  actions: {
    createItem: function() {

      var newItem = this.get('currentModel');
      Ember.Logger.debug("Saving an item:");
      Ember.Logger.debug(newItem);
      newItem.save();

      this.transitionTo('items');
    }
  }
});
