import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  cohort: DS.attr('string'),
  currentJob: DS.attr('string'),
  bio: DS.attr('text'),
  news: DS.attr('text').
  website: DS.attr('string'),
  picture: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});

