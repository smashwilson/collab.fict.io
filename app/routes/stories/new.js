import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submit: function () {
      var
        self = this,
        content = this.controller.get('firstSnippet'),
        snippet = this.store.createRecord('snippet', {
          content: content,
      });

      snippet.save().then(function () {
        var draft = self.store.createRecord('draft', {
          firstLine: content.slice(0, 30),
          contributionStatus: 'cooldown',
          canAdmin: true,
          snippetCount: 1,
          lastSnippet: snippet,
        });

        return draft.save();
      }).then(function () {
        return self.transitionTo('index');
      });
    }
  }
});
