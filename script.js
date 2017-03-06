	// create the module and name it scotchApp
	var app = angular.module('app', ['ngRoute']);

	// configure our routes
	app.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'views/login.html',
				controller  : 'mainController'
			})

			// route for the dashboard page
			.when('/dashboard', {
				templateUrl : 'views/dashboard.html',
				controller  : 'dashboardController'
			})
	});

	// create the controller and inject Angular's $scope
	app.controller('mainController', function($scope, $location) {

		$scope.login = function(){
			$location.path("/dashboard");
		};
	});

	app.controller('dashboardController', function($scope, $location) {
		$scope.logout = function () {
			var retVal = confirm("Do you want to Logout ?");
				if( retVal == true ){
					$location.path("/");
					return true;
				}
				else{  
				  return false;
			}
		};
    $scope.other = 0;
    $scope.total= 0;
    $scope.COD = 0;
		$scope.dish= {
                          name:'Uthapizza',
                          image: 'images/uthapizza.png',
                          category: 'mains', 
                          label:'Hot',
                          price:'4.99',
                          description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               },
                                {
                                   rating:8,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               },
                                {
                                   rating:9,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               },
                                {
                                   rating:10,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                    };
    $scope.otherCalc = function () {
      $scope.other = $scope.total -  $scope.COD; 
    };

    $scope.onlyNumbers = /^\d+$/;

	});