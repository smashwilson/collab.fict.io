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

  var
    one = Ember.Object.create({title: 'one', complete: true}),
    two = Ember.Object.create({title: 'two', complete: false});

  controller.set('model', [one, two]);

  var incomplete = controller.get('incompleteStories');
  strictEqual(incomplete.length, 1);
  strictEqual(incomplete[0].get('title'), 'two');
});
