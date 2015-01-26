module.exports = function(app) {
  var express = require('express');
  var storiesRouter = express.Router();

  storiesRouter.get('/', function(req, res) {
    res.send({
      'stories': [
        {
          'id': 1,
          'title': 'Story One',
          'creatorEmail': 'one@gmail.com',
          'createdAt': '2015-01-02T14:00:00',
          'complete': false,
          'canContribute': true,
          'snippets': [],
        },
        {
          'id': 1,
          'title': 'Story One',
          'creatorEmail': 'one@gmail.com',
          'createdAt': '2015-01-02T14:00:00',
          'complete': false,
          'canContribute': false,
          'snippets': [],
        },
        {
          'id': 2,
          'title': 'Story Two',
          'creatorEmail': 'two@gmail.com',
          'createdAt': '2015-01-01T15:00:00',
          'complete': true,
          'canContribute': false,
          'snippets': [],
        },
        {
          'id': 3,
          'title': 'Story Three',
          'creatorEmail': 'three@gmail.com',
          'createdAt': '2014-12-20T09:00:00',
          'complete': true,
          'canContribute': false,
          'snippets': [],
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

  app.use('/api/v1/stories', storiesRouter);
};
