import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('story-badge', 'StoryBadgeComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it shows a quotation for incomplete stories', function () {
  var component = this.subject();

  component.set('model', Ember.Object.create({complete: false}));

  var icon = component.get('icon');
  strictEqual(icon, 'fa-quote-left');
});

test('it shows a closed book for complete stories', function () {
  var component = this.subject();

  component.set('model', Ember.Object.create({complete: true}));

  var icon = component.get('icon');
  strictEqual(icon, 'fa-book');
});
