angular.module('alurapic')
	.controller('FotoController', function($scope,cadastroDeFotos,recursoFoto,$routeParams) {

		$scope.foto = {};
		$scope.mensagem = '';


		if($routeParams.fotoId) {
			recursoFoto.get({fotoId:$routeParams.fotoId},function(foto){
				$scope.foto = foto;
			},function(error){
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a foto'
			})
		}

		$scope.submeter = function() {

			if ($scope.formulario.$valid) {
				
				cadastroDeFotos.cadastrar($scope.foto).then(function(retorno){
					$scope.mensagem = retorno.mensagem;
					//verificando se é uma inclusao
					if(retorno.mensagem) $scope.foto = {} ; 
					$scope.$broadcast('fotoCadastrada');
				})
				.catch(function(retorno){
					$scope.mensagem = retorno.mensagem;
				});
			}
		};
	});