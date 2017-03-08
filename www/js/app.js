angular.module("App",[
	'ngRoute',
	'ngAnimate'
	]);

angular.module('App').config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'./templates/home.html',
		controller:'HomeController'
	});

	$routeProvider.when('/contact_us',{
		templateUrl:'./templates/contact_us.html',
		controller:'ContactUsController'
	});

	$routeProvider.when('/about',{
		templateUrl:'./templates/about.html',
		controller:'InfoController'
	});

	$routeProvider.when('/faq',{
		templateUrl:'./templates/faq.html',
		controller:'FAQController'
	});

	$routeProvider.when('/register',{
		templateUrl:'./templates/register.html',
		controller:'RegistrationController'
	});

	$routeProvider.when('/why',{
		templateUrl:'./templates/why.html',
		controller:'WhyController'
	});
}]);

angular.module('App').controller("HomeController",["$scope",function($scope){
	

}]);

angular.module('App').controller("ContactUsController",["$scope","$http","$location",function($scope,$http,$location){

	$scope.addContact=function(form){
		if(form.$valid){
			$http.post('./api/contact_us',$scope.contact_us).then(function(data){
				$location.path("/");
				alert("Message Sent");
			},function(){
				alert("Failed to submit Information");
			});
		}
	};
	

}]);

angular.module('App').controller("InfoController",["$scope",function($scope){
	

}]);

angular.module('App').controller("FAQController",["$scope",function($scope){
	

}]);

angular.module('App').controller("WhyController",["$scope",function($scope){
	

}]);

angular.module('App').controller("RegistrationController",["$scope","$http","$location",function($scope,$http,$location){
	$scope.registerUser=function(form){
		if(form.$valid){
			$http.post('./api/register',$scope.user).then(function(data){

				$location.path("/");
				alert("Registered Succesfully");
			},function(){
				alert("Failed to submit Information");
			});
		}
	};

	

}]);


angular.module('App').controller("RootController",["$scope","$rootScope",function($scope,$rootScope){
	
	$rootScope.$on( "$routeChangeSuccess", function( event, next, current) {
		if(next.$$route.originalPath==="/"){
			$scope.welcome="welcome";
			$scope.body_welcome="body-welcome";
		}else{
			$scope.welcome="";
			$scope.body_welcome="";
		}
	} );
}]);
angular.module('App').controller("FAQController",["$scope",function($scope){
	$scope.groups=[
	{
		title:"Frank",
		content:"Testing",
		open:true
	},
	{
		title:"Frank",
		content:"Testing",
		open:false
	},
	{
		title:"Frank",
		content:"Testing",
		open:false
	},
	{
		title:"Frank",
		content:"Testing",
		open:false
	},
	{
		title:"Frank",
		content:"Testing",
		open:false
	},
	];
}]);

