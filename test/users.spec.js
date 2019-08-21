var should = require('should');
var sinon = require('sinon');
var models = require('./test-models')
var users = require('./usersTest');

describe('.show()', function () {
  before(function () {
    sinon.stub(models.User, 'findOne').returns({
      then: function (fn) {
        fn({name: 'Chris'});
      }
    });
  });

  it('should return the statusCode 200', function () {
    req.params.name = 'Chris';
    users.show(req, res);
    res.statusCode.should.be.equal(200);
  });

  it('should return the statusCode 400 if no name', function () {
    delete req.params.name;
    users.show(req, res);
    res.statusCode.should.be.equal(400);
  });

  it('should return a user', function () {
    // req.params.name = 'Chris';
    users.show(req, res);
    JSON.parse(res._getData()).should.be.instanceOf(Object).and.have.a.property('name');
  });
});