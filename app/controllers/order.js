import Ember from 'ember';

// Item-controller for decorating order-models
export default Ember.ObjectController.extend({

  // Nothing useful here yet, since the below can be done in a template using
  // {{order.items.length}} just as well.
  //
  // itemCount: function() {
  //   return this.model.get('items').get('length');
  // }.property('model.items')

});
