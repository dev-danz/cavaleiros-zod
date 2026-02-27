function MudaDesenho(){
    const texto = document.querySelector("h1");
    const texto02 = document.querySelector("p");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
   
   
    if(valor=="gemeos"){
        texto.innerHTML = "gemeos";
        imagem.setAttribute("src","imagens/gemeos01.jpg");
        imagem.setAttribute("width","400px");
        texto02.innerHTML = "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena.";
    }

    else if(valor=="escorpiao"){
        texto.innerHTML = "escorpiao";
        imagem.setAttribute("src","imagens/escorpiao.jpg");
        imagem.setAttribute("width","400px");
        texto02.innerHTML = "Milo de Escorpião foi, no século XX, o Cavaleiro de Ouro de Escorpião que protegia a Casa de Escorpião no Santuário. Era um Cavaleiro fiel ao Santuário, inicialmente obedecendo as ordens do Grande Mestre, embora houvesse ocasiões em que ele se negaria a realizar missões específicas por questões de orgulho, sentimento este que determinava o rumo de suas conversas inicialmente, tendo se tornado consideravelmente mais humilde depois de sua batalha contra Hyoga de Cisne. Teve uma grande amizade com Camus de Aquário, e depois de sua morte se concentrou em zelar por Hyoga. Sua amizade com Camus sempre se fez profunda no mangá e quando o viu como traidor na Saga de Hades, ele quase o matou enforcado enquanto foi reduzido a lágrimas. Se supõe que depois que os Cavaleiros de Ouro e os Renegados se uniram para atacar o Castelo de Hades, Milo e Camus reataram a amizade.";
    }
   
    else if(valor=="peixes"){
        texto.innerHTML = "peixes";
        imagem.setAttribute("src","imagens/peixes.jpg");
        imagem.setAttribute("width","400px");
        texto02.innerHTML = "Albafica de Peixes é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XVIII.";
    }
    else if(valor=="aquario"){
         texto.innerHTML = "aquario";
         texto02.innerHTML = "Quem é Camus de Aquário, Cavaleiro de Ouro dos Cavaleiros do Zodíaco.";
        imagem.setAttribute("src","imagens/aquario.jpg");
        imagem.setAttribute("width","400px");
    }
    else if(valor=="cancer"){
        texto.innerHTML = "cancer";
        texto02.innerHTML = "O Contador da Morte é o Cavaleiro de Câncer e possui características um tanto diferentes em relação aos demais Cavaleiros de Ouro. O personagem é bastante poderoso e habilidoso, mas sempre é retratado de maneira caricata em razão do seu senso de humor.";
        imagem.setAttribute("src","imagens/cancer.jpg");
        imagem.setAttribute("width","400px");
    }
    else if(valor=="capricornio"){
        texto.innerHTML = "capricornio";
        texto02.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a décima casa do Santuário, a Casa de Capricórnio. Um dos principais personagens de Saint Seiya (Os Cavaleiros do Zodíaco), Shura se considera o cavaleiro mais fiel a Athena.";
        imagem.setAttribute("src","imagens/capricornio.jpg");
        imagem.setAttribute("width","400px");

    }
    else if(valor=="leao"){
        texto.innerHTML = "leao";
        texto02.innerHTML =  "Aiolia. o mais famoso Cavaliero de Leão é Aiolia, que sofreu no santuário após seu irmão, Aiolos, ser acusado de traição.";
        imagem.setAttribute("src","imagens/leao.jpg");
        imagem.setAttribute("width","400px");

    }
    else if(valor=="libra"){
        texto.innerHTML = "libra"
        texto02.innerHTML = "Dohko de Libra. O aparentemente inofensivo Mestre Ancião nada mais é do que Dohko, o cavaleiro de Libra.";
        imagem.setAttribute("src","imagens/libra.jpg");
        imagem.setAttribute("width","400px");

    }
    else if(valor=="sargitario"){
        texto.innerHTML = "sargitario";
        texto02.innerHTML = "Seiya de Sagitário é amplamente reconhecido como o mais forte Cavaleiro de Atena de sua época, sendo que muitos afirmam que seu poder no século XXI se tornou tão grande e vasto que nenhum dos demais cavaleiros atuais, independente de sua classificação ou status, conseguiu se igualar em proeza com ele.";
        imagem.setAttribute("src","imagens/sagitario.jpg");
        imagem.setAttribute("width","400px");

    }
    else if(valor=="touro"){
        texto.innerHTML = "touro";
        texto02.innerHTML = "Aldebaran de Touro, foi ele quem, após ter um chifre da armadura arrancado por Seiya, decidiu permitir que os Cavaleiros de Bronze seguissem adiante, tornando possível todos os acontecimentos marcantes e emocionantes que sucedem este primeiro embate nas 12 casas.";
        imagem.setAttribute("src","imagens/touro.jpg");
        imagem.setAttribute("width","400px");

    }
    else if(valor=="virgem"){
        texto.innerHTML = "virgem";
        texto02.innerHTML = "Shaka de Virgem é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário. Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências. O poder de ir e vir no tempo e espaço impressiona até outros Cavaleiros de Ouro.";
        imagem.setAttribute("src","imagens/virgem.jpg");
        imagem.setAttribute("width","400px");

    }
   
    else if(valor=="aries"){
        texto.innerHTML = "aries"
        texto02.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. Como desde cedo desconfiava do Grande Mestre, deu as costas ao Santuário.";
        imagem.setAttribute("src","imagens/aries.jpg");
        imagem.setAttribute("width","400px");

    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.jpg");
        imagem.setAttribute("width","250px");

    }

}