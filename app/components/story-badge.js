import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-group-item', 'clearfix'],

  icon: function() {
    if (this.get('model.complete')) {
      return 'fa-book';
    } else {
      return 'fa-quote-left';
    }
  }.property('model.complete'),

  pluralContribution: function() {
    if (this.get('model.snippets.length').length === 1) {
      return "contribution";
    } else {
      return "contributions";
    }
  }.property('model.snippets'),
});
