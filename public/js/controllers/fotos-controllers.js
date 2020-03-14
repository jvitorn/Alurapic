//modulo 'alurapic' em index e controller 'FotosController' que esta tambem no index
angular.module('alurapic').controller('FotosController',function($scope){
    //definicao do controller
    $scope.foto = {
        titulo:'Cachorro Akamaru',
        url:'https://4.bp.blogspot.com/-E_9AxCqIXSA/TxSmRH79v1I/AAAAAAAAAAM/P_PXAOxDyss/s1600/300px-Akamaru.jpg'
    };
});