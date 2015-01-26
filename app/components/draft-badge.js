import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['draft', 'list-group-item', 'clearfix'],

  pluralContribution: function() {
    if (this.get('model.snippetCount') === 1) {
      return "contribution";
    } else {
      return "contributions";
    }
  }.property('model.snippetCount'),
});
