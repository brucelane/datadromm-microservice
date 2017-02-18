var Shader = require('../models/test.js');

// object passed
function addShader(shaderObject) {
    var shader = new Shader(shaderObject);
    return shader.save();
}

function listShaders() {
    return Shader.find();
}

function removeShader(shaderId) {
    return Shader.findOneAndRemove({_id: shaderId}, null);
}

module.exports = {
    createShader: addShader,
    getShaderList: listShaders,
    deleteShader: removeShader
};