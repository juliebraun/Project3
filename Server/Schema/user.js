var mongoose = require('mongoose');
 
module.exports = mongoose.model('User', {
	_id: String,
	firstname: String,
	lastname: String,
	username: String,
	password: String,
    type: String // 'supervisor', 'worker'
});