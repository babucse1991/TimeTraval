angular.module('searchBrandCtrl', ['pickadate'])

.controller('searchBrandCtrl', function($scope, $ionicModal) {
	 $scope.items = [
	                 {display: 'Hello'},
	                 {display: 'Baha'},
	                 {display: 'Ala'},
	                 {display: 'Siwar'},
	                 {display: 'Monira'},
	                 {display: 'Samir'},
	                 {display: 'Spange Bob'},
	                 {display: 'Deneris Targariant'},
	                 {display: 'Ned Stark'},
	                 {display: 'Hello1'},
	                 {display: 'Baha1'},
	                 {display: 'Ala1'},
	                 {display: 'Siwar1'},
	                 {display: 'Monira1'},
	                 {display: 'Samir1'},
	                 {display: 'Spange Bob1'},
	                 {display: 'Deneris Targariant1'},
	                 {display: 'Ned Stark1'}
	             ];
	             $scope.onSelect = function (item) {
	                 console.log('item', item);
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

