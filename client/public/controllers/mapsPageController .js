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

  
  }]);

