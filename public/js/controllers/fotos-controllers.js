// angular.module('alurapic').controller('FotosController', function($scope,$http) {

//     $scope.fotos = [];
//     //criando uma promessa
//     const promise = $http.get('/v1/fotos');
//     //caso for cumprida ela ira retornar os dados de 'v1/fotos'
//     promise.then(function(success){
//         $scope.fotos = success.data;
//     }).catch(function(error){
//         console.error(error);
//     });
// });
angular.module('alurapicLivros').controller('FotosControllerLivros',function($scope){
    $scope.livros =[
        {
            titulo:'Box - Nórdicos - Os Melhores Contos e Lendas - 2 Volumes',
            url:'http://lojasaraiva.vteximg.com.br/arquivos/ids/12118144/1009548806.jpg?v=637142281290700000',
            descricao:'O Box Nórdicos reúne histórias encantadoras dos povos antigos que habitaram o norte da Europa, região que, atualmente, é composta pelos países Dinamarca, Finlândia, Islândia, Noruega e Suécia. Nele, o leitor conhecerá os melhores contos de fadas, lendas, sagas e mitos nórdicos. São histórias cheias de simbologia, cujos personagens são venerados como deuses, semideuses e heróis, e que vão proporcionar uma experiência muito agradável, seja para crianças, jovens ou adultos. Primeiro volume – Contos e lendas A primeira parte traz contos de fadas mágicos e histórias extraordinárias de autores como Hans Christian Andersen, J. Jakobsen, Peter Christen Asbjørnsen e Jørgen Moe, que falam sobre valores como bravura, coragem, humildade e perseverança. Em suas narrativas a bondade é sempre recompensada. A segunda parte introduz o leitor em um mundo de aventura povoado por criaturas místicas como trolls, anões, orcs, elfos e gigantes. Segundo volume – Mitos e sagas Na primeira parte desse volume, dedicada aos mitos, reunimos contos que abordam desde a criação da humanidade, o nascimento, os feitos e as personalidades de deuses como Odin, Thor e Loki, até a grande batalha de Ragnarók, que tudo destruirá para que o mundo renasça',
            preco:'R$ 31,90'
        },
        {
            titulo:'Os Quatro Segredos Sagrados Para O Amor E A Prosperidade - Um Guia Para Viver Em Um Belo Estado De Ser',
            url:'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10655490&qld=90&l=830&a=-1=1007943217',
            descricao:'Aprenda a liberar o poder oculto da consciência, eliminar a ansiedade e cultivar uma vida de riqueza e felicidade com este guia acessível e revelador, que descreve as quatro chaves do sucesso. Os quatro segredos sagrados combina abordagens científicas comprovadas com práticas espirituais antigas para conduzir você a uma jornada que abrirá sua mente para um destino extraordinário.Com base no poder da sua consciência inexplorada, insights brilhantes vão ajudá-lo a encontrar novas soluções para antigos desafios. Com instruções fáceis de seguir, as meditações incluídas neste livro vão transformar a sua experiência da realidade e lhe possibilitar a descobrir o poder de criar uma bela vida para si mesmo',
            preco:'R$ 29,90'
        },
        {
            titulo:'Box - Série House Of Night - 6 Volumes - Versão Slim',
            url:'http://lojasaraiva.vteximg.com.br/arquivos/ids/12815075/1010080015.jpg?v=637157516481200000',
            descricao:'Atreva-Se A Entrar No Mundo De House Of Night, A Fenomenal Série Best-Seller Do New York Times, Com Esta Coleção Completa Em Dois Boxes Quando Zoey Redbird, de 16 anos, é marcada por um rastreador de vampiros e sua mudança para a forma de vampira se inicia, ela tem de deixar para trás sua família e se mudar para Morada da Noite, um internato para calouros como ela. Como se não bastasse encarar esse desafio em meio a tantas mudanças, a jovem descobre que ela não é uma novata comum. Zoey foi escolhida pela deusa vampira Nyx e, embora tenha ganhado poderes impressionantes, não é tão fácil se encaixar quando todos sabem que você é “especial” – ainda mais quando algumas pessoas desejam que você não fosse... Enquanto Zoey tenta se enturmar e talvez encontrar um namorado (ou três), ela enfrenta todos os tipos de males, desde a garota superpopular e toda perfeita, com planos não tão inocentes, até as misteriosas mortes que acontecem na escola e em seus arredores, além da linda Neferet, alta sacerdotisa que parece ter os melhores interesses para Zoey (será mesmo?). Em Morada da Noite, as coisas raramente são o que parecem, e Zoey terá de encontrar a mais profunda coragem para chegar à verdade e abraçar seu destino',
            preco:'R$ 59,90'
        },
        {
            titulo:'O Fim Em Doses Homeopáticas - Textos Cruéis Demais',
            url:'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10658396&qld=90&l=830&a=-1=1007943217',
            descricao:'O terceiro livro do best-seller de poesia Textos cruéis demais para serem lidos rapidamenteApós o sucesso absoluto dos dois volumes de Textos cruéis demais para serem lidos rapidamente, Igor Pires retorna em mais uma coletânea inédita de textos poéticos, desta vez sobre as características das complexas fases que percorrem os relacionamentos. Dividido em quatro partes, O fim em doses homeopáticas explora de modo sensível o inevitável fim. O livro conta ainda com as belas ilustrações de Anália Moraes (Casa Dobra).',
            preco:'R$ 39,90'
        }
    ];
});