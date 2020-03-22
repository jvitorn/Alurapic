angular.module('alurapic').controller('FotosController', function($scope, $http) {
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';
	$http.get('/v1/fotos').success(function(retorno) {
		$scope.fotos = retorno; // não precisa fazer retorno.data
	})
	.error(function(erro) {
		console.log(erro);
	});
	// removendo fotos criadas
	$scope.remover = function(foto){
		//remove a foto clickada pelo usuario
		console.log(foto);
		$http.delete('v1/fotos/' + foto._id)
		//obtendo sucesso a foto selecionada sera excluida
		.success(function(){
			//capturando o indice da foto
			let indice = $scope.fotos.indexOf(foto);
			//esta manipulando o array criado em 'fotos' e removendo apartir do indice este object do array
			$scope.fotos.splice(indice,1);
			$scope.mensagem = 'Foto '+foto.titulo + ' foi removida com sucesso!' ;
		})
		//caso der erro ira mostrar o erro
		.error(function(error){
			console.log(error)	
			$scope.mensagem = 'nao foi possivel remover a foto '+foto.titulo ;	
		});
	};
});