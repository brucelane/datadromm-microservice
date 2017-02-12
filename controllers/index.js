var Shader = require('../models/test.js');

function addShader() {
    return new Promise(function(resolve, reject) {
        // create shader
        var shader = new Shader({
                name: "flyingSaucers",
                text: "void main(void) {gl_FragColor = vec4(1.0,1.0,0.0,1.0);}",
                url: "https://www.shadertoy.com/view/Md23DV",
                created: new Date(),
                isValid : false 
        }); 
        // save to mongodb
        shader.save(function (err, shaderInserted)
        {
            if (err) {
                return reject(err);
            }
            return resolve(shaderInserted);
            
        });
    });
}

module.exports = {
    createShader: addShader
};