angular.module('meusServicos',['ngResource'])
.factory('recursoFoto',function($resource){
		return $resource('v1/fotos/:fotoId',null,{
			update : { 
				method: 'PUT'
			}
        });
})
//$q -> criação de promisses 
.factory('cadastroDeFotos',function(recursoFoto,$q){

    let servico = {};

    servico.cadastrar = function(foto){
        return $q(function(resolve,reject){
            //caso existir esse id ele ira atualizar as informações 
            if(foto._id){
                recursoFoto.update({fotoId:foto._id},foto,function(){
                    resolve({
                        mensagem:'Foto '+ foto.titulo + ' atualizada com sucesso!',
                        inclusao:false
                    });
                },function(error){
                    console.log(error);
                    reject({
                        mensagem:'Não foi possivel alterar a foto ' + foto.titulo
                    });
                });
            }
            //se nao existir ele ira criar uma nova informação de foto no banco 
            else {
                recursoFoto.save(foto,function(){
                    resolve({
                        mensagem:'Foto ' + foto.titulo + ' Incluida com sucesso ',
                        inclusao:true
                    });
                },function(error){
                    console.log(error);
                    reject({
                        mensagem:'Não foi possivel cadastrar a foto ' + foto.titulo
                    });
                })
            }
        });
    };

    return servico; 
});
