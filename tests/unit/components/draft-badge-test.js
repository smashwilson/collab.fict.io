import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('draft-badge', 'DraftBadgeComponent', {
  // specify the other units that are required for this test
  needs: ['model:story']
});

test('it uses the singular "contribution" for a single snippet', function () {
  var component = this.subject();

  component.set('model', Ember.Object.create({snippetCount: 1}));

  var noun = component.get('pluralContribution');
  strictEqual(noun, 'contribution');
});

test('it pluralizes "contribution" with multiple snippets', function () {
  var component = this.subject();

  component.set('model', Ember.Object.create({snippetCount: 3}));

  var noun = component.get('pluralContribution');
  strictEqual(noun, 'contributions');
});
