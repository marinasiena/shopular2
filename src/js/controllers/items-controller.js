app.controller( 'ItemsController', function( shopItems, $q, StorageService, UserService ) {

	this.items = {};
	this.tax = 0.0575;
	this.img = 'https://tiy-learn-content.s3.amazonaws.com/98350f05-sale_2.png';
	this.newItemObj = {};
	this.items = [];

	$q.when( shopItems.get( './data/items.json' ) )
		.then( ( response ) => {
			this.items = StorageService.get( 'items' );

			if ( this.items.length < 1 ) {
				this.items = response.data;
				for ( i = 0; this.items.length > i; i++ ) {
					this.items[ i ].price = this.priceTotal( this.items[ i ].price, this.items[ i ].discount );
				}
			}
			StorageService.set( 'items', this.items );
		} ).catch( ( error ) => {
			console.log( 'damnit ', error );
		} );

	this.addItem = function( name, price, quantity, color, discount ) {
		this.items = StorageService.get( 'items' );
		this.newItemObj = {
			price: price,
			name: name,
			discount: discount,
			quantity: quantity,
			color: color
		};
		this.newItemObj.price = this.priceTotal( this.newItemObj.price, this.newItemObj.discount );
		this.newItemObj.quantity = Number(this.newItemObj.quantity);
		this.items.push( this.newItemObj );
		StorageService.set( 'items', this.items );
		this.newItemObj = {};
	};

	this.priceTotal = function( origPrice, discount ) {
		let taxDiscPrice = 0;
		taxDiscPrice = ( ( origPrice - discount ) * ( 1 + this.tax ) );
		return +taxDiscPrice.toFixed( 2 );
	};

	this.sort = {
		column: '',
		descending: false
	};

	this.changeSort = function( column ) {
		let sort = this.sort;
		if ( sort.column == column ) {
			sort.descending = !sort.descending;
		} else {
			sort.column = column;
			sort.descending = false;
		}
	};

	this.isLoggedIn = function() {
		this.loggedIn = StorageService.get('login');
		if (this.loggedIn.login === true) {
			return true;
		} else {
			return false;
		}
	};

} ); //ItemsController
