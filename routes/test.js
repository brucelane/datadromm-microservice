var ShaderController = require('../controllers/test.js');

function defaultRoute(app) {

    app.get('/', function(req, res) {
        res.status(200).json('OK');
    });
    app.get('/shaders', function(req, res) {
        ShaderController.getShaderList()
        .then(function(shaderList) {
            res.status(200).json(shaderList);
        })
    });
    app.delete('/shader/:id', function(req, res) {
        ShaderController.deleteShader(req.params.id)
        .then(function() {
            res.status(200).json('Deleted');
        });
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