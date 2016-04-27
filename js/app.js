var myApp = angular.module("ignis",['ngRoute']); 

myApp.controller("MyController",function($scope){
    
    $scope.message = "This is just a Test";
    
});

myApp.config(['$routeProvider',

    function($routeProvider) {
        
    $routeProvider.when('/computer', {
        templateUrl: 'views/computer.html',
        controller: 'ComputerController'
        
    }).when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
    })}
    
]);  

myApp.controller("ComputerController",function($scope){
    $scope.subjects = ["Algorithm","Data Structure"]
});

myApp.controller("ContactController",function($scope){
    $scope.name= "Sandeep Kumar";
    $scope.email = "sandeeppateltech@gmail.com";
    $scope.country = "India";
});