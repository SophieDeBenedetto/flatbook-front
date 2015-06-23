import Ember from 'ember';


export default Ember.Handlebars.makeBoundHelper(function(bio){
  var theString = bio.substring(0,10);
  return new Ember.Handlebars.SafeString(theString);
});

