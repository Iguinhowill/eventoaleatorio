var pedra = 1
var tesoura = 2
var papel = 3

var jogador1
var jogador2



function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
jogada = randomIntFromInterval(1, 3)
 

document.getElementById("btnSortear").disabled = true;

function escolhaJogadorPapel(){
    var jogador1 = papel
    if (jogador1 == papel){
        let mudar =  document.getElementById('Tesoura')
        mudar.style.display = 'none';
        
        mudar =  document.getElementById('Pedra')
        mudar.style.display = 'none';
    }
    document.getElementById('btnSortear').disabled = false
    console.log(jogador1)

}
function escolhaJogadorPedra(){
    var jogador1 = pedra
    if (jogador1 == pedra){
        let mudar =  document.getElementById('Tesoura')
        mudar.style.display = 'none';

        mudar =  document.getElementById('Papel')
        mudar.style.display = 'none';
    }
    document.getElementById('btnSortear').disabled = false
    console.log(jogador1)

}
function escolhaJogadorTesoura(){
    var jogador1 = tesoura
    if (jogador1 == tesoura){
        let mudar =  document.getElementById('Papel')
        mudar.style.display = 'none';

        mudar =  document.getElementById('Pedra')
        mudar.style.display = 'none';
    }
    document.getElementById('btnSortear').disabled = false
    console.log(jogador1)

}

function sortearNumero(){
    if (jogada == pedra){
        var imagem = document.getElementById('img')
        imagem.style.cssText = "background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOze2K3-gRuNE0JgD7yI41ktazn21pVujujBDklIcEdnxFeEPEMHxgJNtaHgRYItTQ2KU&usqp=CAU');"+ "text-align: center";
        document.getElementById('btnJogar').disabled = false

    }else if(jogada == tesoura){
        var imagem = document.getElementById('img')
        imagem.style.cssText = "background-image: url('https://www.bigmae.com/wp-content/uploads/2010/07/jogo-papel-pedra-tesoura.jpg');"+ "text-align: center";
        document.getElementById('btnJogar').disabled = false

    }else{
        var imagem = document.getElementById('img')
        imagem.style.cssText = "background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlp8V9h9y6E6t8_yN_-UbT_gFiLiil9JcaHglXTp_BFjfHawQ2O10s6Su1ORC3lS9JU_8&usqp=CAU');"+ "text-align: center";
        document.getElementById('btnJogar').disabled = false

    };

};




console.log(jogada)
