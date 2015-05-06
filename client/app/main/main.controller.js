'use strict';

angular.module('memexLinkerApp')
  .controller('MainCtrl', function ($scope, $http, socket, lodash) {
    $scope.entities = [];

  $http.get('/api/entities').success(function(res) {
    var entities = lodash.map(res, function(e){
      var nodeData = e._node._data.data;
      var nodeMetaData = e._node._data.metadata;
      return {
        'id': nodeMetaData.id,
        'phone' : nodeData.identifier
      };
    });

    // Aggregate details from ads belonging to this entity.
    lodash.map(entities, function(entity) {
          $http.get('api/entities/' + entity.id + '/byphone').success(function(res){
            var ads = lodash.map(res, function(element){ 
              return element.ad._data.data;
            });
            //console.log('Ads');
            //console.log(ads);
            var postTimes = lodash.map(ads, function(ad){
                // TODO: 
                return new Date(ad.posttime);
              });
            var imageUrls = lodash.flatten(
              lodash.map(ads, function(ad) {
                return ad.image_locations;
              }),
              true
            );

            var entitySummary = {
              id: entity.id,
              phone: entity.phone,
              nPosts: ads.length,
              postTimes : postTimes,
              imageUrls: imageUrls
            };
            console.log(entitySummary);
            $scope.entities.push(entitySummary);
          });
        });

    });
   
   });