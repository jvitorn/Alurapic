angular.module('alurapic').controller('FotosController', function($scope,$http) {

    $scope.fotos = [];
    //criando uma promessa
    const promise = $http.get('/v1/fotos');
    //caso for cumprida ela ira retornar os dados de 'v1/fotos'
    promise.then(function(success){
        $scope.fotos = success.data;
    }).catch(function(error){
        console.error(error);
    });
});