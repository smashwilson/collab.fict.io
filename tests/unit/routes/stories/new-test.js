import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:stories/new', 'StoriesNewRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it creates a blank Draft', function () {
  var
    route = this.subject(),
    model = route.model();

  strictEqual(model.get('firstSnippetBody'), '');
});
