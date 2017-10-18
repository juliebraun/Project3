var User = require('../Schema/user.js');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

module.exports = function (app, passport) {
	passport.serializeUser(function(user, done) {
	  done(null, user._id);
	});
	 
	passport.deserializeUser(function(id, done) {
	  User.findById(id, function(err, user) {
	    done(err, user);
	  });
	});


	passport.use('login', new LocalStrategy({
	    passReqToCallback : true
	  },
	  function(req, username, password, done) { 
	    // check in mongo if a user with username exists or not
		console.log(req.body.type);
	    User.findOne({ 'username' :  username, 'type': req.body.type }, 
	      function(err, user) {
	        // In case of any error, return using the done method
	        if (err) {
				return done(err);
			}
	        // Username does not exist, log error & redirect back
	        if (!user){
	          console.log('User Not Found with username '+username);
			  req.message="User Not found.";
	          return done(null, false);                 
	        }
	        // User exists but wrong password, log the error 
	        if (!isValidPassword(user, password)){
	          console.log('Invalid Password');
			  req.message = "Invalid Password";
	          return done(null, false);
	        }
	        // User and password both match, return user from 
	        // done method which will be treated like success
	        return done(null, user);
	      }
	    );
	}));
	
	
	
	
	
	passport.use('signup', new LocalStrategy({
	    passReqToCallback : true
	  },
	  function(req, username, password, done) {
	    findOrCreateUser = function(){
	      // find a user in Mongo with provided username
	      User.findOne({'username':username},function(err, user) {
			  console.log("HERE");
	        // In case of any error return
	        if (err){
	          console.log('Error in Signup: '+err);
	          return done(err);
	        }
	        // already exists
	        if (user) {
	          console.log('User already exists');
			  req.message = "User Already Exists";
	          return done(null, false);
	        } else {
	          // if there is no user with that email
	          // create the user
	          var newUser = new User();
	          // set the user's local credentials
			  newUser._id = uid(64) + Date.now();
	          newUser.username = username;
			  newUser.firstname = req.body.firstname;
			  newUser.lastname = req.body.lastname;
	          newUser.password = createHash(password);
			  newUser.type = req.body.type;
	 
	          // save the user
	          newUser.save(function(err) {
	            if (err){
	              console.log('Error in Saving user: '+err);  
	              throw err;  
	            }
	            console.log('User Registration succesful');    
	            return done(null, newUser);
	          });
	        }
	      });
	    };
	     
	    // Delay the execution of findOrCreateUser and execute 
	    // the method in the next tick of the event loop
	    process.nextTick(findOrCreateUser);
	  })
	);
}




function isValidPassword(user, password){
  return bcrypt.compareSync(password, user.password);
}

function uid(len) {
	var buf = [],
		chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
		charlen = chars.length;

	for (var i = 0; i < len; ++i) {
		buf.push(chars[getRandomInt(0, charlen - 1)]);
	}

	return buf.join('');
}

function getRandomInt(min, max) {
	if (typeof min != 'number') {
		min = Math.floor(Math.random() * 100);
	}
	if (typeof max != 'number') {
		max = Math.floor(Math.random() * 100);
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var createHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}
