import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  creatorEmail: DS.attr('string'),
  createdAt: DS.attr('date'),
  snippets: DS.hasMany('snippet')
});
