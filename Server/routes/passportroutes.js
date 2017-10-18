module.exports = function (app, passport) {
	/* Handle Login POST */
	app.post('/login', passport.authenticate('login'), function (req, res) {
		console.log("HERE");
		if (req.user) {
			res.send(req.user);
		} else {
			res.status(400).send(req.message);
		}
	});

	/* Handle Registration POST */
	app.post('/signup', passport.authenticate('signup'), function (req, res) {
		console.log(req.user);
		if (req.user) {
			res.send(req.user);
		} else {
			res.status(400).send(req.message);
		}
	});
	
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
}

