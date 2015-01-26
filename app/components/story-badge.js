import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-group-item', 'clearfix'],

  icon: function() {
    if (this.get('model').get('complete')) {
      return 'fa-book';
    } else {
      return 'fa-quote-left';
    }
  }.property('model')
});
