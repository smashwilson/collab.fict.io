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

  badStatus: function() {
    var
      self = this,
      validStatus = [
      'canWrite', 'isLockedByYou', 'isLockedByOther', 'justWrote'
    ].any(function (check) { return self.get(check); });

    if (!validStatus) {
      return this.get('model.contributionStatus');
    } else {
      return null;
    }
  }.property('model.contributionStatus'),

  message: function() {
    if (this.get('isLockedByYou')) {
      return 'Please finish your contribution once you start it, so others have a chance to write!';
    }

    if (this.get('isLockedByOther')) {
      return "You'll have to wait your turn!";
    }

    if (this.get('justWrote')) {
      return 'You can write again once someone else has contributed.';
    }

    return null;
  }.property('model.contributionStatus'),

  pluralContribution: function() {
    if (this.get('model.snippetCount') === 1) {
      return "contribution";
    } else {
      return "contributions";
    }
  }.property('model.snippetCount'),
});
