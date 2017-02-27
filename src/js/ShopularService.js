angular.module( 'shopulars' ).service( 'shopItems', ShopularService );

function ShopularService( $http ) {
	function getItems( url ) {
		return $http( {
			method: 'GET',
			url: url
		} );
	}

	return {
		get: getItems
	};
}
