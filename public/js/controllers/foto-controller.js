angular.module('alurapic')
	.controller('FotoController', function($scope, $http,$routeParams) {

		$scope.foto = {};
		$scope.mensagem = '';
		//verificando se foi passado algum parametro nesta rota
		if($routeParams.fotoId){
			let rotaFoto = $routeParams.fotoId;
			//caso o parametro foi passado , ira mostrar os dados desta foto pela api
			$http.get('v1/fotos/', rotaFoto)
			.success(function(foto){
				$scope.foto = foto;
			})
			.error(function(error){
				console.log(erro);
				$scope.mensagem = 'Não foi possivel obter esta foto ' + rotaFoto + 'para editar';
			});
		};

		$scope.submeter = function() {

			if ($scope.formulario.$valid) {

				$http.post('/v1/fotos', $scope.foto)
				.success(function() {
					$scope.foto = {};
					$scope.mensagem = 'Foto cadastrada com sucesso';
				})
				.error(function(erro) {
					console.log(erro);
					$scope.mensagem = 'Não foi possível cadastrar a foto';
				})

			}
		};
	});