import {
  moduleFor,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleFor('controller:index', 'IndexController', {
  // Specify the other units that are required for this test.
  // needs: ['model:story']
});

test('list incomplete stories', function() {
  var controller = this.subject();

  controller.set('model', [
    Ember.Object.create({title: 'one', complete: true}),
    Ember.Object.create({title: 'two', complete: false})
  ]);

  var incomplete = controller.get('incompleteStories');

  equal(incomplete, [{title: 'two', complete: false}]);
});
