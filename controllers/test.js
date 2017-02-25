var Shader = require('../models/test.js');

// object passed
function addShader(shaderObject) {
    var shader = new Shader(shaderObject);
    return shader.save();
}

function listShaders(page, results) {
    // page 1 don't skip 
    return Shader
        .find()
        .skip((page > 0) ? ((page-1)*results) : 0)
        .limit(results);
}

function removeShader(shaderId) {
    return Shader.findOneAndRemove({_id: shaderId}, null);
}

module.exports = {
    createShader: addShader,
    getShaderList: listShaders,
    deleteShader: removeShader
};