import Ember from 'ember';

export default Ember.ArrayController.extend({
  incompleteStories: function() {
    return this.get('model').filterBy('complete', false);
  }.property('model')
});
