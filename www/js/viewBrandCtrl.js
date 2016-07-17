angular.module('viewBrandCtrl', [])

.controller('viewBrandCtrl', function($scope, searchData, $stateParams, vehicalEntry, $ionicLoading, $filter) {
	
	
	 $scope.searchfrom = $stateParams.from;
	 $scope.searchtoAddr= $stateParams.to;
	 $scope.searchroomSize= $stateParams.roomSize;
	 $scope.searchmoveDate= $stateParams.moveDate;
	 $scope.searchflexible= $stateParams.flexible;
	 $scope.searchisFullDay= $stateParams.isFullDay;
	 $scope.searchtimeOfMove= $stateParams.timeOfMove;
	 
	 
	 $scope.vehicalEntry = vehicalEntry;
	 
	 console.log(" $scope.searchKeys : " + $scope.searchfrom + " >> " + $scope.searchtoAddr + " >>"+ $scope.searchroomSize + " >> " + $scope.searchmoveDate + " >> " + $scope.searchflexible +
			 " >> " + $scope.searchisFullDay + " >> " + $scope.searchtimeOfMove);
	
	 
	 $scope.getSearchData =  function () {
			
			$scope.resultArray = [];
			$scope.vehicalEntry.$getIndex().forEach(function (index) {
				var eachItem = $scope.vehicalEntry[index];
				$scope.resultArray.push(eachItem);
				$ionicLoading.hide();
			});	
			
			if (!angular.isUndefined($scope.searchfrom)) {
				$scope.resultArray = $filter('filter')($scope.resultArray, $scope.searchfrom , function(matchedVal, filterText) { console.log("matchedVal :" + matchedVal); return ( (matchedVal.toString().indexOf(filterText) >= 0)   ? true : false )});	
			}
			if (!angular.isUndefined($scope.searchtoAddr) && $scope.searchtoAddr != '') {
				$scope.resultArray = $filter('filter')($scope.resultArray, $scope.searchtoAddr , function(matchedVal, filterText) { return ( (matchedVal.toString().indexOf(filterText) >= 0) ? true : false )});
			}
			if (!angular.isUndefined($scope.searchroomSize) && $scope.searchroomSize != '') {
				$scope.resultArray = $filter('filter')($scope.resultArray, $scope.searchroomSize , function(matchedVal, filterText) { return ( (matchedVal.toString().indexOf(filterText) >= 0) ? true : false )});
			}
			if (!angular.isUndefined($scope.searchmoveDate) && $scope.searchmoveDate != '') {
				$scope.resultArray = $filter('filter')($scope.resultArray, $scope.searchmoveDate , function(matchedVal, filterText) { return ( (matchedVal.toString().indexOf(filterText) >= 0) ? true : false )});
			}
			if (!angular.isUndefined($scope.searchflexible) && $scope.searchflexible != '') {
				$scope.resultArray = $filter('filter')($scope.resultArray, $scope.searchflexible , function(matchedVal, filterText) { return ( (matchedVal.toString().indexOf(filterText) >= 0) ? true : false )});
			}
			if (!angular.isUndefined($scope.searchisFullDay) && $scope.searchisFullDay != '') {
				$scope.resultArray = $filter('filter')($scope.resultArray, $scope.searchisFullDay , function(matchedVal, filterText) { return ( (matchedVal.toString().indexOf(filterText) >= 0) ? true : false )});
			}
			if (!angular.isUndefined($scope.searchtimeOfMove) && $scope.searchtimeOfMove != '') {
				$scope.resultArray = $filter('filter')($scope.resultArray, $scope.searchtimeOfMove , function(matchedVal, filterText) { return ( (matchedVal.toString().indexOf(filterText) >= 0) ? true : false )});
			}
			
			console.log("$scope.resultArray : " + JSON.stringify($scope.resultArray));
			$scope.searchData = $scope.resultArray; 
	};
	
//	$scope.getSearchData();
	
	
		$scope.getSearchData = function(){
		searchData.getSearchData()
		.success(function(data) {
			$scope.searchData = data;
			console.log(JSON.stringify($scope.searchData))
		});
		};
		$scope.getSearchData();

		$scope.saveSampleData =  function () {
			
			$scope.sampleData = [
{
    "companyName":"Test",
    "smallVan":300,
    "biggerVan":500,
    "evenBiggerVan":600,
    "vanSize" : M,
	"bedCost" : 100,
	"bedCount" : 3,
	"datePerDay" : 500,
	"regin" : "Chennai",
	"location" :"Anna Nagar",
	"flexible" : true
},
{
    "companyName":"Test 11",
    "smallVan":300,
    "biggerVan":200,
    "evenBiggerVan":400,
    "vanSize" : S,
	"bedCost" : 300,
	"bedCount" : 3,
	"datePerDay" : 500,
	"regin" : "Chennai",
	"location" :"T Nagar",
	"flexible" : true
},
{
    "companyName":"Test 22",
    "smallVan":300,
    "biggerVan":500,
    "evenBiggerVan":600,
    "vanSize" : M,
	"bedCost" : 100,
	"bedCount" : 3,
	"datePerDay" : 500,
	"regin" : "Chennai",
	"location" :"Tambarem",
	"flexible" : true
},
{
    "companyName":"Test 33",
    "smallVan":300,
    "biggerVan":500,
    "evenBiggerVan":600,
    "vanSize" : M,
	"bedCost" : 100,
	"bedCount" : 3,
	"datePerDay" : 500,
	"regin" : "Chennai",
	"location" :"Thiruvanmiur",
	"flexible" : true
},
{
    "companyName":"Test 44",
    "smallVan":300,
    "biggerVan":500,
    "evenBiggerVan":600,
    "vanSize" : M,
	"bedCost" : 100,
	"bedCount" : 3,
	"datePerDay" : 500,
	"regin" : "Chennai",
	"location" :"Mudichure",
	"flexible" : true
},
{
    "companyName":"Test",
    "smallVan":300,
    "biggerVan":500,
    "evenBiggerVan":600,
    "vanSize" : M,
	"bedCost" : 100,
	"bedCount" : 3,
	"datePerDay" : 500,
	"regin" : "Chennai",
	"location" :"Tdel park",
	"flexible" : true
}

			                     ];
			
			
			$scope.sampleItems.$add($scope.sampleData); 
			console.log(" data saved.");
			
		}
		
		$scope.saveSampleData();

});
