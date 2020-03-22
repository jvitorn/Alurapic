//angular.module('alurapic', ['minhasDiretivas']);
angular.module('alurapic', ['minhasDiretivas','ngAnimate','ngRoute'])
    .config(function($routeProvider,$locationProvider){
        $locationProvider.html5Mode(true);
        //quando entrar na rota 'fotos ' 
        $routeProvider.when('/fotos',{
            templateUrl :'partials/principal.html',
            controller:'FotosController'
        });
        //wuando entrar na rota 'fotos/new'
        $routeProvider.when('/fotos/new',{
            templateUrl :'partials/foto.html'
        });
        //quando o usuario entrar em uma rota que nao existe ira redirecionar para 'fotos'
        $routeProvider.otherwise({redirectTo: '/fotos'});
    });
;//inportando o animate    