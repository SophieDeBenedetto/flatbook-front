import Ember from 'ember';

export function shortBio(params/*, hash*/) {
  return params;
}

export default Ember.Handlebars.registerBoundHelper('shortBio', function(bio){
  var theString = bio.substring(0,10);
  return new Ember.Handlebars.SafeString(theString);
});

