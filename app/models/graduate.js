import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  cohort: DS.attr('string'),
  currentJob: DS.attr('string'),
  bio: DS.attr('string'),
  news: DS.attr('string'),
  website: DS.attr('string'),
  picture: DS.attr('string'),
  linkedin: DS.attr('string'),
  twitter: DS.attr('string'),
  github: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
});


