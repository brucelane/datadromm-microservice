var ShaderController = require('../controllers/test.js');
var jwt = require('jsonwebtoken');
var pwd = require('../pwd.json') || {passwd:'movealong'};

function defaultRoute(app) {
    app.post('/auth', function(req, res) {
        var passwd = req.body.passwd;
        if (!passwd) {
            return res.sendStatus(401);
        } 
        if (passwd !== pwd.passwd) {
            return res.sendStatus(400);
        }
        var token = jwt.sign({},pwd.passwd,{expiresIn:60});
        res.status(200).send(token);
    });
    app.use(function(req, res, next){
        var auth = req.headers['authorization'];
        jwt.verify(auth, pwd.passwd, function(err, decodedToken) {
            if (err) {
                return res.sendStatus(401);
            }
            next();
        }); 
    });
    app.get('/', function(req, res) {
        res.status(200).json('OK');
    });
    app.get('/shaders/:page?/:results?', function(req, res) {
        req.params.results = +req.params.results || 10; // jarpi trick
        req.params.page = +req.params.page || 0; 
                console.dir(req.params);

        ShaderController.getShaderList(req.params.page, req.params.results)
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
        var newShader = req.body;
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