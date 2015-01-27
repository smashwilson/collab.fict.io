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
        return self.transitionTo('index');
      });
    }
  }
});
