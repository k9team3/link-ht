'use strict';

angular.module('memexLinkerApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {

    $scope.logo = 'http://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Paper-Clip-icon.png';

    $scope.menu = [{
      'title': 'Search',
      'link': '/'
    },
    {
      'title': 'Saved Entities',
      'link': '/savedEntities'
    },
    // {
    //   'title': 'Image Stream',
    //   'link': '/imagestream'
    // },
    {
      'title': 'FAQ',
      'link': '/faq'
    }]
    ;

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });