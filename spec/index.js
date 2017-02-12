var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var should = require('should');
var sinon = require('sinon');
var shaderModel = require('../models/test.js');
var shaderController =  require('../controllers/index.js');

describe('Controllers', function() {

    describe('Shaders', function(){
        var saveStub;
        before(function(done){
            stub = sinon.stub(shaderModel.prototype, 'save');
            done();
        });

        it('Add a shader successfully', function(done) {
            stub
            .yields(null, {});
            shaderController.createShader()
                .then(function(value){
                done();
            });
        });

        it('Add a shader fails', function(done) {
            stub
            .yields(new Error('Unexpected error'), null);
            shaderController.createShader()
                .then(function(value){
                done('Should not be resolved');
                })
                .catch(function(err){
                    done();
                });
        });
    });
});
