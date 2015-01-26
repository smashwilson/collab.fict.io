import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  creatorEmail: DS.attr('string'),
  createdAt: DS.attr('date'),
  complete: DS.attr('boolean'),
  canContribute: DS.attr('boolean'),
  snippets: DS.hasMany('snippet')
});
