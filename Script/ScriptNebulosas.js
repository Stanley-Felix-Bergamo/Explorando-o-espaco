//Textos que Vão Dentro da Caixa de Informação dos Planetas
var TextOrion="A nebulosa de Órion ou nebulosa de Orião, também descrita como M42 ou NGC 1976,<br> de acordo com a    nomenclatura astronômica, é uma nebulosa difusa que se encontra entre<br> 1500 e 1800 anos-luz do    Sistema    Solar, e situada a sul do Cinto de Órion.<br><br> Foi descoberta por Nicolas-Claude Fabri de Peiresc em    1610    (anteriormente havia sido<br> classificada como estrela - Theta Orionis). Existem muitas outras (fracas)    nebulosas ao <br>redor da nebulosa Orion e existem muitas formações de estrelas na região.<br><br> A    nebulosa    Orion    é, provavelmente, a nebulosa mais ativamente estudada do céu.<br> O seu nome provém da sua localização    na    constelação Orion. Possui 25 anos-luz<br> de diâmetro, uma densidade de 600 átomos/cm³ e temperatura de    70    K. Trata-se<br> de uma região de formação estelar: em seu interior as estrelas estão nascendo<br> e    começando a    brilhar constantemente.<br><br> Há uma enorme concentração de poeira estelar e de gases nessa região, o    que    sugere<br> a existência de água, pela junção de hidrogênio e oxigênio.    É uma das nebulosas mais<br> brilhantes, e pode ser observada a olho nu sobre o céu noturno. Fica a 1    270±76    anos<br>-luz da Terra, e possui um diâmetro aproximado de 24 anos-luz.<br><br></br>";
var TextoGun=" A Nebulosa de Gum (Gum 12) é uma nebulosa de emissão que pode ser<br> encontrada no sul das constelações        de        Puppis e Vela.        Encontra-se a <br>aproximadamente 400 parsecs da Terra. Difícil de distinguir, acredita<br>-se ser uma    grande        expansão (e ainda        em expansão) de restos de uma<br> supernova que ocorreu cerca de um milhão de anos atrás.<br><br>Ela        contém        em        si        um remanescente        menor e mais jovem, a Supernova<br> de Vela, juntamente com o Pulsar de Vela        Tem o nome de seu descobridor,<br> o astrônomo australiano Colin Stanley Gum (1924-1960). Gum        publicou<br>    suas    descobertas em 1955 em um trabalho chamado Um estudo de nebulosas<br> difusas H-alfa do Sul.";
var TextoOMG=  " A Nebulosa Ômega, também conhecida como a Nebulosa do Cisne ou Nebulosa<br> da Ferradura (Messier 17,    NGC    6618) é uma região    HII, ou seja, uma região<br> composta de gás estelar e poeira que recentemente começou a formar    novas<br>    estrelas.<br><br> A nebulosa    está localizada na constelação de Sagitário e foi descoberta pelo astrônomo<br> francês Philippe Loys de    Chéseaux em 1745, e    catalogada pelo francês Charles Messier<br> em 1764 em seu catálogo de objetos de aparência semelhante a  cometas.<br><br> A nebulosa    está localizada em uma região rica em estrelas, na região sagitariana<br> da Via-Láctea.    A Nebulosa Ômega está entre 5 000 a 6 000 anos-luz da Terra e <br>mede cerca de 15 anos-luz de diâmetro.    A    nuvem de matéria    interestelar onde a <br>Nebulosa Ômega está contida tem cerca de 40 anos-luz de diâmetro.<br><br> A    massa    total    da    nebulosa está    estimada em 800 massas solares. Um aglomerado <br>estelar aberto, composto de 35 estrelas, está contida    na    nebulosa. Sua    intensa <br>radiação causa a diminuição do gás estelar em suas vizinhanças.";

//Id De Cada Planta, da Tag <a>
var or=document.getElementById('Orion');
var gun=document.getElementById('Gun');
var omg=document.getElementById('Omg');




//Inserindo Texto da Terra
var p=document.getElementById('SubT2');
p.innerHTML=TextOrion;


//Tem O Objetivo de Mudar a Imagem,Subtitulo e o Texto
function MudarImagem(IDPlaneta,obj,NovaImg){

document.getElementById(obj).src=NovaImg;
var img= document.getElementById('planeta');
var Planeta=document.getElementById(IDPlaneta);
var h1=document.getElementById('SubT1'); 


            if(IDPlaneta=='Orion'){
            if(Planeta && Planeta.style){
             p.innerHTML=TextOrion;
             h1.innerHTML="Nebulosa de Órion";
             Limpar();
             Planeta.style.boxShadow='0px 2px red';
            }
            } 
            if(IDPlaneta=='Gun'){
            if(Planeta && Planeta.style){
             p.innerHTML=TextoGun;
             h1.innerHTML="Nebulosa de Gum";
             Limpar();
             Planeta.style.boxShadow='0px 2px red';
            }
            } 
            if(IDPlaneta=='Omg'){
            if(Planeta && Planeta.style){
             p.innerHTML=TextOrion;
             h1.innerHTML="Nebulosa Ômega";
             Limpar();
             Planeta.style.boxShadow='0px 2px red';
            }
            } 

          
}


//Tem O Obejetivo de Limpar o AnderLine Vermelho
function Limpar(){ 
or.style.boxShadow='none';
gun.style.boxShadow='none';
omg.style.boxShadow='none';
  
}

 