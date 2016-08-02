var ronaldApp = angular.module('ronaldApp', []);


//  Force AngularJS to call our JSON Web Service with a 'GET' rather than an 'OPTION'
//  Taken from: http://better-inter.net/enabling-cors-in-angular-js/
/*
ronaldApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
*/
ronaldApp.controller('form2Ctrl', function($scope, $http) {
 $http.get("http://www.omdbapi.com/?s=%22Star%20Wars:%20Episode%22")
          .success(function (response){
             $scope.movies = response.Search;
          });
});

ronaldApp.controller('form3Ctrl', function($scope, $http) {
 $http.get("http://www.omdbapi.com/?t=Game-of-Thrones")
          .success(function (response){
             $scope.gameofthrones = response;
          });

          $scope.selectSeason = function (val) {
              $scope.selectedSeason = val;
              $scope.loadSeason();
          }

          $scope.loadSeason = function () {
              //  The user has selected a season from radio button.  Let's load this season's records.
              $http.get('http://www.omdbapi.com/?t=Game-of-Thrones&Season='+$scope.selectedSeason)
                  .success(function (data) {
                      $scope.seasonDetails = data.Episodes;
                  })
                  .error(function (data, status, headers, config) {
                      $scope.errorMessage = "Couldn't load the list of the selected season, error # " + status;
                  });
          }
});
