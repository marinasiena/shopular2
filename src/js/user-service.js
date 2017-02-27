app.service( 'UserService', function( StorageService ) {

	this.currLogin = {};
	let currTime = Date.now();

	function loginUser( login ) {

		let storedLogin = StorageService.get( 'login');

		this.currLogin = {
			username: login.username,
			password: login.password,
			time: currTime,
			login: true
		};

		if ((storedLogin.password == login.password) && (storedLogin.username == login.username)) {
			return this.currLogin;
		} else {
			StorageService.set( 'login', login );
			return this.currLogin;
		}
	}

	return {
		loginUser:loginUser
	};

} );
