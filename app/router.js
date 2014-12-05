import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('items', function() {
    // no nested routes so far
  });
  this.route('items.new');
});

export default Router;
