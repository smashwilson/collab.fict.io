import DS from 'ember-data';

export default DS.Model.extend({
  firstLine: DS.attr('string'),
  creatorEmail: DS.attr('string'),
  createdAt: DS.attr('date'),
  contributionStatus: DS.attr('string'),
  canAdmin: DS.attr('boolean'),
  snippetCount: DS.attr('number'),
  lastSnippet: DS.belongsTo('snippet'),
});
