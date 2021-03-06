angular.module('app.firebase', [])
.factory('Spinner', function ($http, $ionicLoading) {
	return {
		spin: function () {
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: true,
				maxWidth: 200,
				showDelay: 0,
				template: '<p class=""><ion-spinner icon="bubbles" class="spinner-calm"></ion-spinner></p>'
			});
		}
	}
})
.factory("vehicalEntry", function($firebase,Spinner) {
	 
      var itemsRef = new Firebase("https://todomvc-angular.firebaseio.com/vehivalItems");
      
      return $firebase(itemsRef);
      Spinner.spin();
})

.factory('searchData', function($http,Spinner){
	return{
		getSearchData : function(){
			return $http.get("./JSON/search.json");
		}
	}
});