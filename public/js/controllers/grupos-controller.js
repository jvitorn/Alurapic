angular.module('alurapic').controller('GruposController',function($scope,$http) {
    
    $scope.grupos = [];
    //capturando dados do servidor 
    $http.get('v1/grupos')
    .success(function(retorno){
        //ira capturar os dados do servidor e inserir em scope.grupos
        $scope.grupos = retorno ; 
    })
    .error(function(error){
        console.log(error);
    });
});