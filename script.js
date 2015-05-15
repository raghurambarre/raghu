var app = angular.module('myapp', ['ng-bootstrap-datepicker']);

app.controller('AppCtrl', function($scope){
$scope.datepickerOptions =
{
    format: 'mm/dd/yyyy',
    language: 'en',
    autoclose: true,
    weekStart: 0
 }   
 // $scope.date = '2000-03-12'
});