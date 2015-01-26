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
          'canContribute': true,
          'snippetCount': 1,
        },
        {
          'id': 2,
          'firstLine': 'Draft You Just Contributed To',
          'creatorEmail': 'one@gmail.com',
          'createdAt': '2015-01-02T14:00:00',
          'canContribute': false,
          'snippetCount': 4,
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
