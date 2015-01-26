import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  creatorEmail: DS.attr('string'),
  createdAt: DS.attr('date'),
  story: DS.belongsTo('story'),
  draft: DS.belongsTo('draft'),
});
