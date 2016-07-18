angular.module('routerApp').controller('mainCtrl',function($scope, dataService, $stateParams){

    $scope.test = 'Hello From Home Page';

    var id = $stateParams;
    if($stateParams) {
      dataService.getRecentProject(id);

    }

});
