angular.module('routerApp')
  .service('dataService', dataService);

function dataService() {
  this.getRecentProject = function (id) {
    console.log(id);
    console.log('service');
  };
}
