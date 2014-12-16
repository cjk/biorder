import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('item');
    // Later, when you need both the order and the items model:
    // return Ember.RSVP.hash({
    //   items: this.store.find('user'),
    //   orders: this.store.find('tweet')
    // });
  }
});
