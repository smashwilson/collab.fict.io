import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{
      creatorEmail: 'smashwilson@gmail.com',
      complete: 'false',
    }];
  }
});
