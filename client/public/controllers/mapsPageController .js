app.controller('mapsPageController', ['$scope', '$http', 'httpService', '$sce', "$timeout", function ($scope, $http, httpService, $sce, $timeout) {

  //////////////////////////////////////////MAPS PAGE CONTROLLER DRIVER//////////////////////////////////////////////

  //create array that will contain data for ALL incoming tweets
  $scope.allTweets = {
    data: []
  };

  //create array that will contain data for ONLY quality/relevant tweets
  $scope.relevantTweets = [];

  //function that will ultimately 
  $scope.favoriteSubmit = function () {
    httpService.sendFavorite($scope.favoriteField);
  };

  //used for relevantTweets
  $scope.addRelevantTweet = function(tweet){
    $scope.relevantTweets.unshift(tweet);
  }
////////////////////////////////////////////CREATE AND OPEN SOCKET/////////////////////////////////////////////////////////
  
  var onInit = function() {
    
    ////////////////////////////////ASSUMPTIONS + DRIVERS FOR HANDLING DATA STREAM///////////////////////////////////////////
    
    //establish map drivers
    var maxNumOfTweetsAllowedOnMap = 1000;
    var heatmap = new google.maps.visualization.HeatmapLayer({
      radius: 15
    });
    
    var setMapOnAll = function(map) {
      for (var i = 0; i < $scope.allTweets.data.length; i++) {
        $scope.allTweets.data[i].setMap(map);
      }
    };

    var clearMarkers = function(){
      setMapOnAll(null);
    };
    var deleteMarkers = function() {
      clearMarkers();
      $scope.allTweets.data = [];
    };
  
  }]);

