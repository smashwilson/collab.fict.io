import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submit: function () {
      var content = this.controller.get('firstSnippet');

      var snippet = this.store.createRecord('snippet', {
        content: content,
      });

      snippet.save().then(function () {
        var draft = this.store.createRecord('draft', {
          firstLine: snippet.slice(0, 30),
          contributionStatus: 'cooldown',
          canAdmin: true,
          snippetCount: 1,
          lastSnippet: snippet,
        });

        return draft.save();
      }).then(function () {
        this.transitionTo('index');
      });
    }
  }
});
