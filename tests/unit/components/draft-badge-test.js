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

test('it detects when you can write', function () {
  var component = this.subject();

  component.set('model', Ember.Object.create({contributionStatus: 'available'}));

  ok(component.get('canWrite'));
  strictEqual(component.get('isLockedByYou'), false);
  strictEqual(component.get('isLockedByOther'), false);
  strictEqual(component.get('justWrote'), false);
});

test('it detects when you have the lock', function () {
  var component = this.subject();

  component.set('model', Ember.Object.create({contributionStatus: 'lockOwned'}));

  strictEqual(component.get('canWrite'), false);
  ok(component.get('isLockedByYou'));
  strictEqual(component.get('isLockedByOther'), false);
  strictEqual(component.get('justWrote'), false);
});

test('it detects when someone else has locked the draft', function () {
  var component = this.subject();

  component.set('model', Ember.Object.create({contributionStatus: 'locked:other@gmail.com'}));

  strictEqual(component.get('canWrite'), false);
  strictEqual(component.get('isLockedByYou'), false);
  ok(component.get('isLockedByOther'));
  strictEqual(component.get('justWrote'), false);

  strictEqual(component.get('lockOwner'), 'other@gmail.com');
});

test('it detects when you just wrote', function () {
  var component = this.subject();

  component.set('model', Ember.Object.create({contributionStatus: 'cooldown'}));

  strictEqual(component.get('canWrite'), false);
  strictEqual(component.get('isLockedByYou'), false);
  strictEqual(component.get('isLockedByOther'), false);
  ok(component.get('justWrote'));
});
