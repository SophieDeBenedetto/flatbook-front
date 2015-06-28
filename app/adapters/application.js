import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: 'http://flatbook-api.herokuapp.com'
  // host: 'http://localhost:3000'
});