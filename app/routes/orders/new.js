import OrderBase from './base';

export default OrderBase.extend({
  model: function() {
    return this.get('store').createRecord('order');
  }

  // add your custom router-code for the edit-route here

});
