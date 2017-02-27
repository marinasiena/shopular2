app.controller( 'UserController', function( localStorageService, UserService ) {

	this.login = {};

	this.currLogin = function( username, password ) {

		let currTime = Date.now();
		this.login = {
			username: username,
			password: password,
			time: currTime,
			login: true
		};
		this.currLogin = UserService.loginUser( this.login );
	};

	this.isIn = function() {
		let inLogin = localStorageService.get( 'login');
		return inLogin;
	};

} ); //UserController
