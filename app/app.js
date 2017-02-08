var munchkinGM = angular.module('munchkinGM', ['ngRoute', 'ngAnimate']);

munchkinGM.config(['$routeProvider', /*'$locationProvider',*/ function($routeProvider/*, $locationProvider*/){

  //$locationProvider.html5Mode(true);

  $routeProvider
    .when('/home',{
      templateUrl:'views/home.html',
      controller: ''
    })
    .when('/pregame',{
      templateUrl:'views/pregame.html',
      controller: ''
    })
    .when('/ingame', {
        templateUrl: 'views/ingame.html',
        controller: ''
    })
    .when('/endgame', {
        templateUrl: 'views/endgame.html',
        controller: ''
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: ''
    })
    .when('/contact-success', {
      templateUrl: 'views/contact-success.html',
      controller: ''
    })
    .otherwise({
    redirectTo: '/home'
    });

}]);

munchkinGM.controller('PlayerController', ['$scope', '$http', function($scope, $http){

    $scope.removePlayer = function(player){
      var removedPlayer = $scope.players.indexOf(player);
      $scope.players.splice(removedPlayer, 1);
    }

    $scope.addPlayer = function () {
      $scope.players.push({
        name: $scope.newPlayer.name,
        gender: $scope.newPlayer.gender
      });
      $scope.newPlayer.name = "";
      $scope.playerForm.$setUntouched();
    }

    $scope.removeAll = function(){
        $scope.players = [];
    };

    $http.get('data/players.json').then(function(playerData){
      $scope.players = playerData.data;
    });

    //getElementById('player-strength').innerHTML = getElementById('player-level').value + getElementById('player-bonus').value;

}]);

munchkinGM.controller('ContactController', ['$scope', '$location', function($scope, $location){

  $scope.sendMessage = function(){
    $location.path('/contact-success')
  };

}]);
