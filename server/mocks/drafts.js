module.exports = function(app) {
  var express = require('express');
  var storiesRouter = express.Router();

  storiesRouter.get('/', function(req, res) {
    res.send({
      'drafts': [
        {
          'id': 1,
          'firstLine': 'Open Draft',
          'creatorEmail': 'one@gmail.com',
          'createdAt': '2015-01-02T14:00:00',
          'contributionStatus': 'available',
          'snippetCount': 1,
        },
        {
          'id': 2,
          'firstLine': 'Draft You Just Contributed To',
          'creatorEmail': 'one@gmail.com',
          'createdAt': '2015-01-02T14:00:00',
          'contributionStatus': 'cooldown',
          'snippetCount': 4,
        },
        {
          'id': 3,
          'firstLine': 'Draft You Locked',
          'creatorEmail': 'one@gmail.com',
          'createdAt': '2015-01-02T14:00:00',
          'contributionStatus': 'lockOwned',
          'snippetCount': 9,
        },
        {
          'id': 4,
          'firstLine': 'Draft Someone Else Locked',
          'creatorEmail': 'one@gmail.com',
          'createdAt': '2015-01-02T14:00:00',
          'contributionStatus': 'locked:Another User',
          'snippetCount': 3,
        },
        {
          'id': 5,
          'firstLine': 'Draft with a Bad Status',
          'creatorEmail': 'one@gmail.com',
          'createdAt': '2015-01-02T14:00:00',
          'contributionStatus': 'wtf',
          'snippetCount': 15,
        },
      ]
    });
  });

  storiesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  storiesRouter.get('/:id', function(req, res) {
    res.send({
      'stories': {
        id: req.params.id
      }
    });
  });

  storiesRouter.put('/:id', function(req, res) {
    res.send({
      'stories': {
        id: req.params.id
      }
    });
  });

  storiesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/v1/drafts', storiesRouter);
};
