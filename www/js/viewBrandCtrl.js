angular.module('viewBrandCtrl', [])

.controller('viewBrandCtrl', function($scope, $stateParams, sampleItems, $ionicLoading, $filter) {
	/*searchData*/
	 $scope.searchlabelOne = $stateParams.labelOne;
	 $scope.searchlabelTwo= $stateParams.labelTwo;
	 $scope.searchlabelThree= $stateParams.labelThree;
	 $scope.searchlabelFour= $stateParams.labelFour;
	 $scope.searchlabelFive= $stateParams.labelFive;
	 $scope.searchlabelSix= $stateParams.labelSix;
	 $scope.searchlabelSeven= $stateParams.labelSeven;
	 
	 
	 $scope.sampleItems = sampleItems;
	 
	 console.log(" $scope.searchKeys : " + $scope.searchlabelOne + " >> " + $scope.searchlabelTwo + " >>"+ $scope.searchlabelThree + " >> " + $scope.searchlabelFour + " >> " + $scope.searchlabelFive +
			 " >> " + $scope.searchlabelSix + " >> " + $scope.searchlabelSeven);
	
	 
	 $scope.getSearchData =  function () {
			
			$scope.resultArray = [];
			$scope.sampleItems.$getIndex().forEach(function (index) {
				var eachItem = $scope.sampleItems[index];
				$scope.resultArray.push(eachItem);
				$ionicLoading.hide();
			});	
			
			if (!angular.isUndefined($scope.searchlabelOne)) {
				$scope.resultArray = $filter('filter')($scope.resultArray, $scope.searchlabelOne , function(matchedVal, filterText) { console.log("matchedVal :" + matchedVal); return ( (matchedVal.toString().indexOf(filterText) >= 0)   ? true : false )});	
			}
			if (!angular.isUndefined($scope.searchlabelTwo) && $scope.searchlabelTwo != '') {
				$scope.resultArray = $filter('filter')($scope.resultArray, $scope.searchlabelTwo , function(matchedVal, filterText) { return ( (matchedVal.toString().indexOf(filterText) >= 0) ? true : false )});
			}
			if (!angular.isUndefined($scope.searchlabelThree) && $scope.searchlabelThree != '') {
				$scope.resultArray = $filter('filter')($scope.resultArray, $scope.searchlabelThree , function(matchedVal, filterText) { return ( (matchedVal.toString().indexOf(filterText) >= 0) ? true : false )});
			}
			if (!angular.isUndefined($scope.searchlabelFour) && $scope.searchlabelFour != '') {
				$scope.resultArray = $filter('filter')($scope.resultArray, $scope.searchlabelFour , function(matchedVal, filterText) { return ( (matchedVal.toString().indexOf(filterText) >= 0) ? true : false )});
			}
			if (!angular.isUndefined($scope.searchlabelFive) && $scope.searchlabelFive != '') {
				$scope.resultArray = $filter('filter')($scope.resultArray, $scope.searchlabelFive , function(matchedVal, filterText) { return ( (matchedVal.toString().indexOf(filterText) >= 0) ? true : false )});
			}
			if (!angular.isUndefined($scope.searchlabelSix) && $scope.searchlabelSix != '') {
				$scope.resultArray = $filter('filter')($scope.resultArray, $scope.searchlabelSix , function(matchedVal, filterText) { return ( (matchedVal.toString().indexOf(filterText) >= 0) ? true : false )});
			}
			if (!angular.isUndefined($scope.searchlabelSeven) && $scope.searchlabelSeven != '') {
				$scope.resultArray = $filter('filter')($scope.resultArray, $scope.searchlabelSeven , function(matchedVal, filterText) { return ( (matchedVal.toString().indexOf(filterText) >= 0) ? true : false )});
			}
			
			console.log("$scope.resultArray : " + JSON.stringify($scope.resultArray));
			$scope.searchData = $scope.resultArray; 
	};
	
	$scope.getSearchData();
	
	
		/*$scope.getSearchData = function(){
		searchData.getSearchData()
		.success(function(data) {
			$scope.searchData = data;
			console.log(JSON.stringify($scope.searchData))
		});
		};
		$scope.getSearchData();*/


});
