'use strict';

app.service('StorageService', function (localStorageService) {

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
});