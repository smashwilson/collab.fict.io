import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('story', 'Story', {
  // Specify the other units that are required for this test.
  needs: ['model:snippet', 'model:draft']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
