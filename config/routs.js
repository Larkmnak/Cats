//  Controllers
var Controller = require('./../controllers/cats.js');

module.exports = function(app){
	app.get('/', Controller.index);         // Root Request
	app.get('/cats/new', Controller.new);
	app.get("/cats/:id", Controller.show);
	app.get('/cats/:id/edit', Controller.edit);
	app.post('/cats', Controller.create);
	app.post('/cats/:id', Controller.update);
	app.post('/cats/:id/destroy', Controller.destroy);
}

