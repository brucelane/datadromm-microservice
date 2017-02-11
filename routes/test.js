var Shader = require('../models/test.js');

function defaultRoute(app) {
    app.get('/', function(req, res) {
        res.status(200).json('OK');
    });
    app.get('/shaders', function(req, res) {
        var shaderModel = new Shader({
            name: "flyingSaucers",
            text: "void main(void) {gl_FragColor = vec4(1.0,1.0,0.0,1.0);}",
            url: "https://www.shadertoy.com/view/Md23DV",
            created: new Date(),
            isValid : false 
        }); 
        shaderModel.save(function(err, shaderInserted){
            if (err) {
                return res.status(500).json('KO');
            }
            return res.status(200).json(shaderInserted);
            
        });
    });
}
module.exports = function(app) {
    defaultRoute(app);
}