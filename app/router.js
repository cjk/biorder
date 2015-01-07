import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('orders', function() {
    this.route('new');
  });
  this.resource('items');
  this.route('items.new');
});

export default Router;
