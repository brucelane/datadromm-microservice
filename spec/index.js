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
var mongoose = require('mongoose');

describe('Controllers', function() {

    describe('Shaders', function(){
        var saveStub;
        var listStub;
        var deleteStub;
        before(function(done){
            saveStub = sinon.stub(shaderModel.prototype, 'save');
            listStub = sinon.stub(mongoose.Model, 'find');
            deleteStub = sinon.stub(mongoose.Model, 'findOneAndRemove');
            done();
        });

        it('Add a shader successfully', function(done) {
            saveStub
            .yields(null, {});
            var newShader = {
                name: 'flyingSaucers',
                text: 'void main(void) {gl_FragColor = vec4(1.0,1.0,0.0,1.0);}',
                url: 'https://www.shadertoy.com/view/Md23DV',
                created: new Date(),
                isValid : false 
            };
            shaderController.createShader(newShader)
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
            listStub
            .yields(null, {});
            shaderController.getShaderList()
                .then(function(value){
                done();
                });
        });

        it('List shaders fails', function(done) {
            listStub
            .yields(new Error('Unexpected error'), null);
            shaderController.getShaderList()
                .then(function(value){
                done('Should not be resolved');
                })
                .catch(function(err){
                    done();
                });
        });

        it('Delete a shader successfully', function(done) {
            deleteStub
            .yields(null, {});
            shaderController.deleteShader()
                .then(function(value){
                done();
                });
        });

        it('Delete a shader fails', function(done) {
            deleteStub
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
