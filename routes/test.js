var ShaderController = require('../controllers/index.js');

function defaultRoute(app) {

    app.get('/', function(req, res) {
        res.status(200).json('OK');
    });
    
    app.post('/shaders', function(req, res) {
        ShaderController.createShader()
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
}