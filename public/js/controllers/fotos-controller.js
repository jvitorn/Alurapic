angular.module('alurapic').controller('FotosController', function($scope,recursoFoto) {
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';	

	//consulta pelo parametro passado 
	recursoFoto.query(function(fotos){
		$scope.fotos = fotos ; 
	},function(error){
		console.log(error);
	});

	$scope.remover = function(foto) {
		recursoFoto.delete({ fotoId : foto._id },function(){
			let indiceDaFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceDaFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';

		},function(error){	
			console.log(error);
			$scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
		});
	};

});