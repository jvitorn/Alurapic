angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {
    // ddo = directive definition object (DDO):
    let ddo = {};
    // usando tanto atributo como elemento para o 'restrict'
    ddo.restrict = "AE";
    ddo.transclude = true;
    // captura o titulo 
    ddo.scope = {
        titulo :"@"
    };
    //codigo do HTML a carregar 
    ddo.templateUrl = "js/directives/html/meu-painel.html"; 
    // ng-transclude = preserva os elementos filhos , assim nao ignorando o conteudo
    return ddo;
})
.directive('minhaFoto',function(){
     // ddo = directive definition object (DDO):
     let ddo = {};
     // usando tanto atributo como elemento para o 'restrict'
     ddo.restrict = "AE";
     ddo.transclude = true;
     // captura o titulo 
     ddo.scope = {
         titulo :"@"
     };
     //codigo do HTML a carregar 
     ddo.templateUrl = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           
     // ng-transclude = preserva os elementos filhos , assim nao ignorando o conteudo
     return ddo;
});