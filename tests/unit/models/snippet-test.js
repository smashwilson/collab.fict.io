import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('snippet', 'Snippet', {
  // Specify the other units that are required for this test.
  needs: ['model:story']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
