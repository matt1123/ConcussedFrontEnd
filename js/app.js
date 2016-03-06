'use strict';
var app = angular.module('concussed', ['ngRoute'] );

	app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'name.html',
                controller  : 'mainCtrl'
            })
            .when('/intro',{
                templateUrl : 'single_player/intro.html',
                controller  : 'mainCtrl'
            })
            .when('/mainGame',{
                templateUrl : 'single_player/mainGame.html',
                controller  : 'mainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

           
    });

	app.controller('mainCtrl', ['$scope', '$location', '$timeout', function($scope, $location, $timeout) {
  		$scope.playerName;
        
        $scope.showIntro = true;

  		$scope.startGame = function(){
  			setTimeout(function() {
       			 $('.nameInputDiv').css('opacity','0');
      		}, 1500);

      		$('.welcomeText').fadeIn(1000);
      		$('.welcomeText').css('opacity','1');

      		setTimeout(function() {
       			 $('.welcomeText').css('opacity','0');
                 
      		}, 3000);

      		$('div.welcomeText').fadeIn(1000).removeClass('nameInputOuter');
            
            $timeout(function(){
            }, 4000).then(function() {
                $location.path('/intro/');
            });

  		}
        
        $scope.startVideo = function(){
           $location.path('mainGame');
        }

	}]);	