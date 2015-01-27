module.exports = function(app) {
  var express = require('express');
  var draftRouter = express.Router();

  draftRouter.get('/', function(req, res) {
    res.send({
      'drafts': [
        {
          'id': 1,
          'firstLine': 'Open Draft',
          'creatorEmail': 'one@gmail.com',
          'createdAt': '2015-01-02T14:00:00',
          'contributionStatus': 'available',
          'nextContribution': 1,
          'canAdmin': true,
          'snippetCount': 1,
        },
        {
          'id': 2,
          'firstLine': 'Draft You Just Contributed To',
          'creatorEmail': 'one@gmail.com',
          'createdAt': '2015-01-02T14:00:00',
          'contributionStatus': 'cooldown',
          'nextContribution': 5,
          'canAdmin': true,
          'snippetCount': 4,
        },
        {
          'id': 3,
          'firstLine': 'Draft You Locked',
          'creatorEmail': 'one@gmail.com',
          'createdAt': '2015-01-02T14:00:00',
          'contributionStatus': 'lockOwned',
          'canAdmin': false,
          'snippetCount': 9,
        },
        {
          'id': 4,
          'firstLine': 'Draft Someone Else Locked',
          'creatorEmail': 'one@gmail.com',
          'createdAt': '2015-01-02T14:00:00',
          'contributionStatus': 'locked:Another User',
          'canAdmin': false,
          'snippetCount': 3,
        },
        {
          'id': 5,
          'firstLine': 'Draft with a Bad Status',
          'creatorEmail': 'one@gmail.com',
          'createdAt': '2015-01-02T14:00:00',
          'contributionStatus': 'wtf',
          'canAdmin': false,
          'snippetCount': 15,
        },
      ]
    });
  });

  draftRouter.post('/', function(req, res) {
    res.send({
      'draft': {
        'id': 6,
        'firstLine': 'You Just Made This One',
        'creatorEmail': 'one@gmail.com',
        'createdAt': '2015-01-02T15:00:00',
        'contributionStatus': 'cooldown',
        'canAdmin': true,
        'snippetCount': 1,
        'lastSnippet': 1,
      },
    });
  });

  draftRouter.get('/:id', function(req, res) {
    res.send({
      'drafts': {
        id: req.params.id
      }
    });
  });

  draftRouter.put('/:id', function(req, res) {
    res.send({
      'drafts': {
        id: req.params.id
      }
    });
  });

  draftRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/v1/drafts', draftRouter);
};
