var ShaderController = require('../controllers/test.js');

function defaultRoute(app) {

    app.get('/', function(req, res) {
        res.status(200).json('OK');
    });
    app.get('/shaders', function(req, res) {
        ShaderController.getShaderList()
        .then(function(shaderList) {
            res.status(200).json(shaderList);
        });
    });
    app.delete('/shader/:id', function(req, res) {
        ShaderController.deleteShader(req.params.id)
        .then(function() {
            res.status(200).json('Deleted');
        });
    });
    app.post('/shader', function(req, res) {
        var newShader = {
                name: 'flyingSaucers',
                text: 'void main(void) {gl_FragColor = vec4(1.0,1.0,0.0,1.0);}',
                url: 'https://www.shadertoy.com/view/Md23DV',
                created: new Date(),
                isValid : false 
        };
        ShaderController.createShader(newShader)
        .then(function(shaderInserted) {
            res.status(200).json(shaderInserted);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });

    });
}
module.exports = function(app) {
    defaultRoute(app);
};