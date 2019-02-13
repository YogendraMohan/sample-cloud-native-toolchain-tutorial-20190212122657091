var should = require('should');
var request = require('supertest');
var server = require('../../../app');
var util = require('util');
process.env.A127_ENV = 'test';

describe('controllers', function() {

  describe('hello_world', function() {

    describe('GET /hello there', function() {

      it('should return a default string', function(done) {

        request(server)
          .get('/hello there')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql('Hello there, stranger!');

            done();
          });
      });

      it('should accept a name parameter', function(done) {

        request(server)
          .get('/hello there')
          .query({
            name: 'Scott'
          })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql('Hello there, Scott!');

            done();
          });
      });
    });
  });
});
