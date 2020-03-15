angular.module('livrosDiretivas', [])
.directive('meuLivro', function() {
    // ddo = directive definition object (DDO):
    let ddo = {};
    // usando tanto atributo como elemento para o 'restrict'
    ddo.restrict = "AE";
    ddo.transclude = true;
    // captura o titulo 
    ddo.scope = {
        titulo :"@"
    };

    ddo.templateUrl = "js/directives/html/meu-livro.html"; 
    // ng-transclude = preserva os elementos filhos , assim nao ignorando o conteudo
    return ddo;
});