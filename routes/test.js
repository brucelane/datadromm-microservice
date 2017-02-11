function defaultRoute(app) {
    app.get('/', function(req, res) {
        res.status(200).json('OK');
        res.write('yo');
        res.end();
    });
} 
module.exports = function(app) {
    defaultRoute(app);
}