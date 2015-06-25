import Ember from 'ember';


export default Ember.Handlebars.makeBoundHelper(function(bio){
  if (bio.length > 200){
	var theString = bio.substring(0,200) + " ... "
	return new Ember.Handlebars.SafeString(theString);
  }
  else {
  	return bio;
  }
  
  end
});

