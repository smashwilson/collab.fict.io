module.exports = function(app) {
  var express = require('express');
  var snippetsRouter = express.Router();

  snippetsRouter.get('/', function(req, res) {
    res.send({
      'snippets': [
        {
          'id': 1,
          'content': 'This is the content of a snippet attached to a draft.',
          'creatorEmail': 'one@gmail.com',
          'createdAt': '2015-01-02T14:00:00',
        }
      ]
    });
  });

  snippetsRouter.post('/', function(req, res) {
    res.send({
      'snippet': {
        'id': 2,
        'content': 'The snippet you just sent',
        'creatorEmail': 'one@gmail.com',
        'createdAt': '2015-01-02T14:00:00',
      }
    });
  });

  snippetsRouter.get('/:id', function(req, res) {
    res.send({
      'snippets': {
        id: req.params.id
      }
    });
  });

  snippetsRouter.put('/:id', function(req, res) {
    res.send({
      'snippets': {
        id: req.params.id
      }
    });
  });

  snippetsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/v1/snippets', snippetsRouter);
};
