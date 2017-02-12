"use strict";
/* jshint node: true */
/* global require, Promise, console, process */

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var should = require('should');
var sinon = require('sinon');
var shaderModel = require('../models/test.js');
var shaderController =  require('../controllers/test.js');

describe('Controllers', function() {

    describe('Shaders', function(){
        var saveStub;
        before(function(done){
            saveStub = sinon.stub(shaderModel.prototype, 'save');
            done();
        });

        it('Add a shader successfully', function(done) {
            saveStub
            .yields(null, {});
            shaderController.createShader()
                .then(function(value){
                done();
            });
        });

        it('Add a shader fails', function(done) {
            saveStub
            .yields(new Error('Unexpected error'), null);
            shaderController.createShader()
                .then(function(value){
                done('Should not be resolved');
                })
                .catch(function(err){
                    done();
                });
        });

        it('List shaders successfully', function(done) {
            saveStub
            .yields(null, {});
            shaderController.getShaderList()
                .then(function(value){
                done();
            });
        });

        it('Delete a shader fails', function(done) {
            saveStub
            .yields(new Error('Unexpected error'), null);
            shaderController.deleteShader('1')
                .then(function(value){
                done('Should not be resolved');
                })
                .catch(function(err){
                    done();
                });

        });
    });
});
