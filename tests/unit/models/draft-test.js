import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('draft', 'Draft', {
  // Specify the other units that are required for this test.
  needs: ['model:snippet', 'model:story']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
