import Ember from 'ember';

var
  LOCK_PREFIX = 'locked:',
  LOCK_PREFIXLEN = LOCK_PREFIX.length;

export default Ember.Component.extend({
  classNames: ['draft', 'list-group-item', 'clearfix'],

  canWrite: function() {
    return this.get('model.contributionStatus') === 'available';
  }.property('model.contributionStatus'),

  isLockedByYou: function() {
    return this.get('model.contributionStatus') === 'lockOwned';
  }.property('model.contributionStatus'),

  isLockedByOther: function() {
    return this.get('model.contributionStatus').slice(0, LOCK_PREFIXLEN) === LOCK_PREFIX;
  }.property('model.contributionStatus'),

  justWrote: function() {
    return this.get('model.contributionStatus') === 'cooldown';
  }.property('model.contributionStatus'),

  lockOwner: function() {
    if (!this.get('isLockedByOther')) {
      return null;
    }

    return this.get('model.contributionStatus').slice(LOCK_PREFIXLEN);
  }.property('model.contributionStatus'),

  pluralContribution: function() {
    if (this.get('model.snippetCount') === 1) {
      return "contribution";
    } else {
      return "contributions";
    }
  }.property('model.snippetCount'),
});
