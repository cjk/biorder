var RSVP = require('rsvp');
var superagent = require('superagent');
var expect = require('chai').expect;

var mongoose = require('mongoose');

describe('express rest api server', function(){
  var id;

  before(function(done) {
    var connectDB = function() {
      var promise = new RSVP.Promise(function(resolve, reject) {
        mongoose.connect('mongodb://localhost/biorder', function(err) {
          if (err) {
            reject(err);
            return done();
          }
          return resolve(this);
        });
      });
      return promise;
    };

    var dropDB = function(conn) {
      var promise = new RSVP.Promise(function(resolve, reject) {
        conn.db.dropDatabase(function(err) {
          if (err) {
            console.log('Can not drop db: ' + err);
            return reject(err);
          }
          resolve(this);
        });
      });
      return promise;
    };

    connectDB().then(function(conn) {
      return dropDB(conn);
    });
    done();
  });

  it('post object', function(done) {
    superagent.post('http://localhost:8088/api/items')
      .send({ name: 'Cucumber',
              measuredIn: 'slices'
            })
      .end(function(err, res){
        var result = res.body;

        expect(err).to.eql(null);
        expect(result.id).to.be.ok;
        expect(result.name).to.eql('Cucumber');
        expect(result.measuredIn).to.eql('slices');
        id = result.id;
        done();
      });
  });

  it('retrieves a collection', function(done){
    superagent.get('http://localhost:8088/api/items')
      .end(function(e, res){
        expect(e).to.eql(null);

        var results = res.body;
        console.log(results);

        expect(results.length).to.be.at.least(1);
        expect(results[0]).to.be.an('object');
        expect(results.map(function (item) {
          expect(item).to.include.keys('id', 'name', 'measuredIn');
          return item['id'];
        })).to.contain(id);
        done();
      });
  });
});
