var Item = require('./models/item');
var Serialize = require('./serializers/ember-data');

module.exports = function(router) {

  // Root route (in this case accessed at GET http://localhost:8080/api)
  router.get('/', function(req, res) {
    console.log('Root API-route was accessed!');
    res.json({ message: 'Hello from BiOrder!'});
  });

  // Items findAll
  router.get('/items', function(req, res) {
    Item.find().lean().exec(function(err, items) {
      if (err)
        res.send(err);
      res.send(Serialize.collection(items));
    });
  });

  // Items createNew
  router.post('/items', function(req, res) {
    var params = req.body;
    Item.create({
      name: params.name,
      measuredIn: params.measuredIn
    }, function(err, item) {
      if (err)
        res.send(err);
      res.json(item);
    });
  });

};
