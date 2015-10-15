'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../../lib/currency-cloud')();
var shared = require('../shared')();
var setup = shared.setup;
var teardown = shared.teardown;
var mock = shared.mock.conversions;

describe('conversions', function() {
  before(setup.login);
  after(teardown.logout);
  
  describe('create', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.conversions.create({
          sellCurrency: 'present',
          fixedSide: 'present',
          amount: 'present',
          reason: 'present',
          termAgreement: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.conversions.create({
          buyCurrency: 'present',
          fixedSide: 'present',
          amount: 'present',
          reason: 'present',
          termAgreement: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.conversions.create({
          buyCurrency: 'present',
          sellCurrency: 'present',
          amount: 'present',
          reason: 'present',
          termAgreement: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.conversions.create({
          buyCurrency: 'present',
          sellCurrency: 'present',
          fixedSide: 'present',
          reason: 'present',
          termAgreement: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.conversions.create({
          buyCurrency: 'present',
          sellCurrency: 'present',
          fixedSide: 'present',
          amount: 'present',
          termAgreement: 'present'
        });
      }).to.throw();        
      expect(function() {
        currencyCloud.conversions.create({
          buyCurrency: 'present',
          sellCurrency: 'present',
          fixedSide: 'present',
          amount: 'present',
          reason: 'present'
        });
      }).to.throw();
    });
    
    it('successfully creates a conversion', function(done) {
      currencyCloud.conversions.create(mock.conversion1)
      .then(function(created) {
        expect(mock.schema.validate(created)).is.true;
        expect(created.id).is.not.empty;
        done();
      })
      .catch(done);
    });
  });
  
  describe('get', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.conversions.get(/*no params*/);
      }).to.throw();
    });
    
    it('successfully gets a conversion', function(done) {
      currencyCloud.conversions.create(mock.conversion1)
      .then(function(created) {
        currencyCloud.conversions.get({
          id: created.id
        })
        .then(function(gotten) {
          expect(gotten).to.eql(created);
          done();
        })
        .catch(done);
      });
    });
  });
});