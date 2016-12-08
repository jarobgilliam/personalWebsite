// Initialize the application
var app = angular.module('app', ['ngRoute']);

// Configure routes
app.config(function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'MasterCtrl'
  })
  .otherwise({
    redirectTo: '/home'
  });
});

app.controller('MasterCtrl', function($scope) {
  
});