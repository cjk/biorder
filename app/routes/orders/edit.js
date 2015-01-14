import OrderBase from './base';

export default OrderBase.extend({
  model: function(params) {
    return this.store.find('order', params.order_id);
  }
});
