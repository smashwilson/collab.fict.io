import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      drafts: this.store.find('draft'),
      stories: this.store.find('story')
    });
  }
});
