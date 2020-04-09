angular.module('minhasDiretivas', [])
	.directive('meuPainel', function() {

		var ddo = {};
        //restrição AE -> Atributo 
		ddo.restrict = "AE";
        ddo.transclude = true;


		ddo.scope = {
            titulo: '@'
        };

        ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	})
    .directive('minhaFoto', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           
        
        return ddo;
    })
    .directive('meuBotaoPerigo',function(){

        let ddo = {};
        //restrição E -> elemento 
        ddo.restrict = "E";

        ddo.scope = {
            nome:'@',
            //indicando que sera passado uma expressao ao banco de dados
            acao:'&'
        };

        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao(foto)">{{nome}}</button>';

        return ddo;
    })
    .directive('meuFocus',function(){

        let ddo = {};

        //restrião -> Atributo 
        ddo.restrict = "A";

        ddo.scope = {
            /*
             * @ valor que for passado dentro do atributo 
             * & indicando que sera passado uma expressao 
             * = permite que qualquer alteracao na propriedade sera avisado pelo controller 
            */
            focado : '='
        }

        ddo.link = function(scope,element){
            /*
            *   $watch sao observers = observadores
                ele verifica e observa o parametro selecionado e executa uma função 
             * */
            // scope.$watch('focado',function(){
            //     if(scope.focado) {
            //         element[0].focus();
            //         scope.focado = false;
            //     };
            // });
            scope.$on('fotoCadastrada',function(){
                element[0].focus();
            });
        };

        return ddo;
    })
    .directive('meusTitulos',function(){
        let ddo = {};

        ddo.restrict = "E";
        ddo.template = '<h2>Lista de Fotos</h2><ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
        ddo.controller = function($scope,recursoFoto){
            recursoFoto.query(function(fotos){
                $scope.titulos = fotos.map(function(foto){
                    return foto.titulo;
                });
            })
        };
        return ddo;


    });