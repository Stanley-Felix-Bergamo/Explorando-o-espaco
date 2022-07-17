//Textos que Vão Dentro da Caixa de Informação
var TextoAndromeda=" A galáxia de Andrômeda (Messier 31, NGC 224) é uma galáxia espiral localizada<br> a cerca de 2,54            milhões de            anos-luz de distância da Terra, na direção da constelação<br> de Andrômeda.<br><br> É a galáxia espiral    mais        próxima        da Via Láctea e seu nome é derivado da constelação<br> onde está situada, que, por sua vez, tem seu nome        derivado da princesa mitológica<br> Andrômeda. <br><br>É a mais larga galáxia do Grupo Local, que também        contém        nossa galáxia, a Via Láctea,<br> a galáxia do Triângulo e aproximadamente 30 outras menores. O        levantamento        feito<br> pelo Telescópio Espacial Spitzer em 2006 determinou que sua massa é de aproximadamente<br>        ~0,8-1,5 ×    1012 massas solares enquanto a Via Láctea tem uma massa estimada em 8,5 × 1011<br> massas solares .<br>        <br> Sua        população estelar atinge aproximadamente 1 trilhão de estrelas e a Via Láctea conta<br> com algo entre        200 a    400 bilhões de estrelas.<br><br></br>";
var TextoCata=' A Galáxia do Cata-Vento (catalogada também como NGC 5457 ou M101), é uma galáxia espiral <br>localizada        a        cerca de vinte e        sete milhões de anos-luz (aproximadamente 8,278 megaparsecs) de<br> distância na direção da constelação        de        Ursa Maior.<br><br>        Possui entre cento e setenta e duzentos mil anos-luz de diâmetro, uma magnitude aparente de 7,5,<br> uma        magnitude absoluta        de -21,6, uma declinação de +54º 20 55" e uma ascensão reta de 14 horas<br> 03 minutos 12,4        segundos.<br><br>        A galáxia NGC 5457 foi descoberta em 27 de Março de 1781 por Pierre Méchain.<br>        Embora se estenda por mais de 22 minutos de arco, equivalente a dois terços do<br> diâmetro aparente da        Lua        Cheia, apenas a região central é visível em pequenos telescópios:<br> seus braços começam a ser vistos    com        telescópios de 4 polegadas de abertura.<br><br> Vários de seus braços receberam designações próprias em        catálogos posteriores,<br> como o New General Catalogue (NGC), como os objetos NGC 5447, 5449, 5450,<br>        5451,        5453, 5455, 5458, 5461, 5462 e 5471. Os objetos NGC 5449, 5450, 5451,<br> 5453 e 5458 não existem e        talvez    tenham sido erros grosseiros no <br> da catalogação.';
var TextoBD='Galáxia de Bode (também conhecida como NGC 3031, M81 ou Messier 81) é uma galáxia<br> espiral localizada        a    cerca de doze    milhões de anos-luz (aproximadamente 3,679 megaparsecs)<br> de distância na direção da constelação de        Ursa        Maior.<br> <br> Possui        aproximadamente trinta e seis mil anos-luz de diâmetro, uma magnitude aparente de 6,93,<br> uma        declinação        de +69º 03 55" e        uma ascensão reta de 9 horas, 55 minutos e 32,9 segundos.<br><br>        A galáxia NGC 3031 foi descoberta em 31 de dezembro de 1774 pelo astrônomo alemão<br> Johann Elert Bode.        A galáxia espiral foi a primeira das quatro descobertas originais de<br> Johann Elert Bode, que        descobriu na        mesma ocasião Messier 82 em 31 de dezembro de<br> 1774. Bode descreveu-a como uma "mancha nebulosa",        cerca        de 0,75 graus de distância<br> aparente de M82. <br> <br> Incluiu como o seu décimo sétimo objeto de sua        lista. O        astrônomo francês Pierre Méchain<br> redescobriu independentemente ambas as galáxias em agosto de 1779,        sendo catalogado<br> pelo seu colega de observatório, Charles Messier, em 9 de fevereiro de 1781        É um das<br> galáxias mais fáceis de observar mesmo com pequenos instrumentos ópticos, devido<br> a sua        magnitude aparente de 6,8.';

//Id De Cada Planta, da Tag <a>
var an=document.getElementById('Andromeda');
var ol=document.getElementById('OlhoNegro');
var bd=document.getElementById('Bode');




//Inserindo Texto 
var p=document.getElementById('SubT2');
p.innerHTML=TextoAndromeda;


//Tem O Objetivo de Mudar a Imagem,Subtitulo e o Texto
function MudarImagem(IDPlaneta,obj,NovaImg){

document.getElementById(obj).src=NovaImg;
var img= document.getElementById('planeta');
var Planeta=document.getElementById(IDPlaneta);
var h1=document.getElementById('SubT1'); 


            if(IDPlaneta=='Andromeda'){
            if(Planeta && Planeta.style){
             p.innerHTML=TextoAndromeda;
             h1.innerHTML="Galáxia de Andrômeda";
             Limpar();
             Planeta.style.boxShadow='0px 2px red';
            }
            } 

            if(IDPlaneta=='OlhoNegro'){
            if(Planeta && Planeta.style){
             p.innerHTML=TextoCata;
             h1.innerHTML="Galáxia do Cata-Vento";
             Limpar();
             Planeta.style.boxShadow='0px 2px red';
            }
            } 

            if(IDPlaneta=='Bode'){
            if(Planeta && Planeta.style){
             p.innerHTML=TextoBD;
             h1.innerHTML="Galáxia de Bode";
             Limpar();
             Planeta.style.boxShadow='0px 2px red';
            }
            } 

}


//Tem O Obejetivo de Limpar o AnderLine Vermelho
function Limpar(){ 
an.style.boxShadow='none';
ol.style.boxShadow='none';
bd.style.boxShadow='none';

}

 