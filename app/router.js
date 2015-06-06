import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('graduates', function() {
    this.resource('graduate', { path: '/:graduate_id' });
  });
});