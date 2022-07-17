//Textos que Vão Dentro da Caixa de Informação dos Planetas
var TextoSol="  O Sol (do latim sol, solis) é a estrela central do Sistema Solar.<br> Todos os outros corpos do Sistema     Solar, como planetas, planetas capn, asteroides,<br> cometas e poeira, bem como todos os satélites            associados a estes corpos, giram ao<br> seu redor.<br> <br> Responsável por 99,86% da massa do Sistema            Solar,        o        Sol        possui uma massa 332 900<br> vezes maior do que a da Terra, e um volume 1 300 000 vezes maior do que o        do        nosso<br> planeta.<br> <br> A distância da Terra ao Sol é de cerca de 150 milhões de quilômetros ou 1        unidade<br>            astronômica (UA). Esta distância varia ao longo do ano, de um mínimo de 147,1 <br> milhões de            quilômetros        (0,9833 UA), no perélio (ou periélio), a um máximo de<br> 152,1 milhões de quilômetros (1,017 UA), no        afélio       (que ocorre em torno do dia<br> 4 de julho).<br> <br> A luz solar demora aproximadamente 8 minutos e 18        segundos        para chegar à Terra.<br> <br> Energia do Sol na forma de luz solar é armazenada em glicose por        organismos        vivos<br>        através da fotossíntese, processo do qual, direta ou indiretamente, dependem todos<br> os seres vivos        que        habitam nosso planeta. A energia solar também é responsável <br> pelos fenômenos meteorológicos e o        clima    na Terra.";
var TextoSi=" Sírio, também chamada de Sirius, α CMa, α Canis Majoris ou alpha Canis Majoris<br> (latim: Alfa do Cão    Maior) é a estrela        mais brilhante do céu noturno visível a olho nu,<br> com uma magnitude aparente de −1,46. Localizada na        constelação do Cão        Maior, pode <br>ser vista a partir de qualquer ponto na Terra, sendo que, no Hemisfério Norte faz        parte<br>        do        Hexágono do        Inverno. Dista 2,6 parsecs (ou 8,57 anos-luz) da Terra, sendo por isso <br>uma das estrelas mais        próximas do        nosso planeta.<br><br>        A sua estrela vizinha mais próxima é Prócion, à distância de 1,61 pc ou 5,24 anos-luz,<br> com um        espectro        de tipo A0 ou A1        e uma massa cerca de 2,4 vezes maior que a massa<br> do Sol.<br><br>        Sírio é uma estrela binária de duas estrelas brancas orbitando entre si a uma distância<br> de 20            unidades        astronômicas,        aproximadamente a distância entre o Sol e Urano, com<br> um período de 50,1 anos.<br><br> A estrela mais        brilhante    denominada Sírius    A é uma estrela de sequência principal do<br> tipo espectral A1V, com uma temperatura na superfície de    9940        K.";
var TextDelta=" Delta Canis Majoris (δ CMa, δ Canis Maioris), Wezen, é uma estrela da<br> constelação do Cão Maior.    Também é        conhecida por Alwazn, Wesen, Al<br> Wazor. O nome vem do árabe وزن wazn que significa peso.        Wezen está a<br> 1800 anos luz da Terra, e tem uma magnitude aparente de 1,84m, magnitude<br> absoluta        de        -6.87m        e uma Supergigante branco-amarela de classe espectral F8<br> Ia.    Na bandeira do Brasil, como uma estrela de segunda grandeza, representa<br> o estado de Roraima.   ";
var TextAnaBranca="  Em astronomia, uma anã branca é um remanescente estelar composto principalmente<br> por matéria    eletronicamente degenerada.    Uma anã branca é altamente densa: sua massa<br> é comparável com a do Sol, enquanto seu volume é        comparável    com o volume da        Terra.<br><br> A fraca luminosidade de uma anã branca tem sua origem na emissão de energia térmica<br>        de        reserva;        não há fusão    dentro de uma anã branca, processo no qual massa é convertida <br>em energia.<br><br> A anã branca mais        próxima        do    Sistema Solar é    Sirius B, a uma distância de 8,6 anos-luz,<br> a menor componente da estrela binária Sirius. Atualmente,        há        oito anãs        brancas detectadas<br> entre as centenas de sistemas estelares próximos do Sol.<br><br> O brilho fraco        das        anãs        brancas foi        primeiramente reconhecido em 1910.<br> O nome anã branca foi proposto por Willem Luyten em 1922.<br>        Anãs brancas são objetos resultantes do processo evolutivo de estrelas de até 10 MSol,<br> o que        significa    dizer que cerca        de 98% de todas as estrelas evoluirão até a fase de anã<br> branca. Entretanto, somente 6% dos objetos        nas    vizinhanças do    Sol são anãs brancas.   ";
var TextoAnavermelha="  Uma anã vermelha é a menor e mais fria classe de estrelas da sequência principal.<br> As anãs vermelhas    são    o tipo mais    comum de estrela na Via Láctea, pelo menos na<br> vizinhança do Sol, mas por causa de sua baixa    luminosidade, as anãs    vermelhas<br> individuais não podem ser facilmente observadas.<br><br> Da Terra, nenhuma estrela que se        encaixa    nas    definições mais    restritas de uma anã<br> vermelha é visível a olho nu. Proxima Centauri, a estrela mais próxima do Sol,    é<br>    uma anã    vermelha, assim como 50 das 60 estrelas mais próximas.<br><br> De acordo com algumas estimativas, as    anãs    vermelhas constituem    três quartos das estrelas<br> da Via Láctea.    As anãs vermelhas mais frias perto do Sol têm uma temperatura de superfície<br> de ~2.000 K e as menores    têm    raios de ~9% do    Sol, com massas de cerca de ~7.5% do Sol.<br><br> Essas anãs vermelhas têm classes espectrais de L0 a        L2. Há        alguma sobreposição    com as <br>propriedades das anãs marrons, uma vez que as anãs marrons mais massivas com<br> metalicidade    mais    baixa podem ser    tão quentes quanto 3.600 K e ter tipos espectrais<br> M tardios.";

//Id De Cada Planta, da Tag <a>
var sol=document.getElementById('Sol');
var si=document.getElementById('Sirius');
var delta=document.getElementById('Delta');
var b=document.getElementById('branca');
var v=document.getElementById('Verm');




//Inserindo Texto da Terra
var p=document.getElementById('SubT2');
p.innerHTML= TextoSol;


//Tem O Objetivo de Mudar a Imagem,Subtitulo e o Texto
function MudarImagem(IDPlaneta,obj,NovaImg){

document.getElementById(obj).src=NovaImg;
var img= document.getElementById('planeta');
var Planeta=document.getElementById(IDPlaneta);
var h1=document.getElementById('SubT1'); 

            if(img && img.style){ 
            img.style.width=  '600px';
            }

            if(IDPlaneta=='Sol'){
            if(Planeta && Planeta.style){
             p.innerHTML=TextoSol;
             h1.innerHTML="Sol";
             Limpar();
             Planeta.style.boxShadow='0px 2px red';
            }
            }

            if(IDPlaneta=='Sirius'){
            if(Planeta && Planeta.style){
             p.innerHTML=TextoSi;
             h1.innerHTML="Sirius";
             Limpar();
             Planeta.style.boxShadow='0px 2px red';
            }
            }

            if(IDPlaneta=='Delta'){
            if(Planeta && Planeta.style){
             p.innerHTML=TextDelta;
             h1.innerHTML="Delta";
             Limpar();
             Planeta.style.boxShadow='0px 2px red';
            }
            }

            if(IDPlaneta=='branca'){
            if(Planeta && Planeta.style){
             p.innerHTML=TextAnaBranca;
             h1.innerHTML="Anã";
             Limpar();
             Planeta.style.boxShadow='0px 2px red';
            }
            }

            if(IDPlaneta=='Verm'){
            if(Planeta && Planeta.style){
             p.innerHTML=TextoAnavermelha;
             h1.innerHTML="Anã";
             Limpar();
             Planeta.style.boxShadow='0px 2px red';
            }
            }
}


//Tem O Obejetivo de Limpar o AnderLine Vermelho
function Limpar(){ 
    sol.style.boxShadow='none';
    si.style.boxShadow='none';
    delta.style.boxShadow='none';
    b.style.boxShadow='none';
    b.style.boxShadow='none';
    v.style.boxShadow='none';
}