angular.module('searchBrandCtrl', ['pickadate'])

.controller('searchBrandCtrl', function($scope, $ionicModal) {
	 $scope.sampleData={};
	 
	 $scope.fromItems = [
	                 {display: 'Trichy'},
	                 {display: 'Chennai'},
	                 {display: 'Namakkal'},
	                 {display: 'Mumbai'},
	                 {display: 'Mathurai'},
	                 {display: 'Perambalur'},
	                 {display: 'Selam'},
	                 {display: 'Karur'},
	                 {display: 'Vilupuram'}
	             ];
	             $scope.fromItemsOnSelect = function (fromItems) {
	            	 console.log('fromItems'+JSON.stringify(fromItems));	                 
	             }
	 $scope.items = [
	                 {display: 'Trichy'},
	                 {display: 'Chennai'},
	                 {display: 'Namakkal'},
	                 {display: 'Mumbai'},
	                 {display: 'Tambarem'},
	                 {display: 'Thiruvanmiur'},
	                 {display: 'Mudichure'},
	                 {display: 'Tdel park'},
	                 {display: 'Anna Nagar'}
	             ];
	             $scope.onSelect = function (item) {
	            	
	            		$scope.sampleData.to = item.display;
	            		console.log('$scope.sampleData'+JSON.stringify(item));
	            	
	                 
	             };
	             $ionicModal.fromTemplateUrl('templates/datemodal.html', 
	            	        function(modal) {
	            	            $scope.datemodal = modal;
	            	        },
	            	        {
	            	        // Use our scope for the scope of the modal to keep it simple
	            	        scope: $scope, 
	            	        // The animation we want to use for the modal entrance
	            	        animation: 'slide-in-up'
	            	        }
	            	    );
	            	    $scope.opendateModal = function() {
	            	      $scope.datemodal.show();
	            	    };
	            	    $scope.closedateModal = function(modal) {
	            	      $scope.datemodal.hide();
	            	      $scope.datepicker = modal;
	            	    };
	            	    
});

