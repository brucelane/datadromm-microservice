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

        it('Add a shader successfully', function() {
            saveStub
            .returns(Promise.resolve({}));
            var newShader = {
                name: 'flyingSaucers',
                text: 'void main(void) {gl_FragColor = vec4(1.0,1.0,0.0,1.0);}',
                url: 'https://www.shadertoy.com/view/Md23DV',
                created: new Date(),
                isValid : false
            };
            return shaderController.createShader(newShader)
                .should.be.fulfilled();
       });

        it('Add a shader fails', function() {
            saveStub
            .returns(Promise.reject('Unexpected error'));
            return shaderController.createShader()
            .should.be.rejected();
        });

        it('List shaders successfully', function() {
            var mockFindOne = {
                skip: function () {
                    return mockFindOne;
                },
                limit: function () {
                    return Promise.resolve({});
                }
            };
            listStub
            .returns(mockFindOne);
            return shaderController.getShaderList(1, 10)
            .catch(function(err) {console.dir(err);})
            .should.be.fulfilled();
        });

        it('List shaders fails', function() {
            var mockFindOne = {
                skip: function () {
                    return mockFindOne;
                },
                limit: function () {
                    return Promise.reject('Unexpected error');
                }
            };
            listStub
            .returns(mockFindOne);
            return shaderController.getShaderList()
            .should.be.rejected();
        });

        it('Delete a shader successfully', function() {
            deleteStub
            .returns(Promise.resolve({}));
            return shaderController.deleteShader()
            .should.be.fulfilled();
        });

        it('Delete a shader fails', function() {
            deleteStub
            .returns(Promise.reject('Unexpected error'));
            return shaderController.deleteShader('1')
            .should.be.rejected();
        });
    });
});
