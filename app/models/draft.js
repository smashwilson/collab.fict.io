import DS from 'ember-data';

export default DS.Model.extend({
  firstLine: DS.attr('string'),
  creatorEmail: DS.attr('string'),
  createdAt: DS.attr('date'),
  contributionStatus: DS.attr('string'),
  snippetCount: DS.attr('number'),
  lastSnippet: DS.belongsTo('snippet'),
});
