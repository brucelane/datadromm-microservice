function defaultRoute(app) {
    app.get('/', function(req, res) {
        res.status(200).json('OK');
    });
    app.get('/yo', function(req, res) {
        res.status(200).json('yo');
    });
} 
module.exports = function(app) {
    defaultRoute(app);
}