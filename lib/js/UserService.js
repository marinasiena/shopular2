'use strict';

app.service('UserService', StorageService);
function StorageService(localStorageService) {

	function set(key, val) {
		localStorageService.set(key, val);
	}
	function get(key) {
		return localStorageService.get(key) || [];
	}
	return {
		set: set,
		get: get
	};
}

// angular.module('cookieStoreExample', ['ngCookies'])
// .controller('ExampleController', ['$cookieStore', function($cookieStore) {
//   // Put cookie
//   $cookieStore.put('myFavorite','oatmeal');
//   // Get cookie
//   var favoriteCookie = $cookieStore.get('myFavorite');
//   // Removing a cookie
//   $cookieStore.remove('myFavorite');
// }]);