module.exports = function(app) {
  var express = require('express');
  var storiesRouter = express.Router();

  storiesRouter.get('/', function(req, res) {
    res.send({
      'stories': []
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

  app.use('/api/stories', storiesRouter);
};
