const instituicoesDeCaridade = [
  {
    nome: "Médicos Sem Fronteiras (MSF)",
    site: "https://www.msf.org.br/",
    categoria: "Saúde",
  },
  {
    nome: "Cruz Vermelha Brasileira",
    site: "https://www.cruzvermelha.org.br/",
    categoria: "Ajuda Humanitária",
  },
  {
    nome: "AACD - Associação de Assistência à Criança Deficiente",
    site: "http://www.aacd.org.br/",
    categoria: "Saúde",
  },
  {
    nome: "GRAACC - Grupo de Apoio ao Adolescente e à Criança com Câncer",
    site: "http://www.graacc.org.br/",
    categoria: "Saúde",
  },
  {
    nome: "Casa Hope",
    site: "http://www.casahope.org.br/",
    categoria: "Assistência Social",
  },
  {
    nome: "Instituto Ayrton Senna",
    site: "https://www.institutoayrtonsenna.org.br/",
    categoria: "Educação",
  },
  {
    nome: "GACC - Grupo de Apoio à Criança com Câncer",
    site: "https://www.gaccbahia.org.br/",
    categoria: "Saúde",
  },
  {
    nome: "Aldeias Infantis SOS Brasil",
    site: "https://www.aldeiasinfantis.org.br/",
    categoria: "Assistência Social",
  },
  {
    nome: "Instituto Ronald McDonald",
    site: "https://www.institutoronald.org.br/",
    categoria: "Saúde",
  },
  {
    nome: "ONG Moradia e Cidadania",
    site: "http://moradiaecidadania.org.br/",
    categoria: "Assistência Social",
  },
  {
    nome: "Projeto Cidadão",
    site: "http://projetocidadao.org.br/",
    categoria: "Assistência Social",
  },
  {
    nome: "Fundação Abrinq pelos Direitos da Criança e do Adolescente",
    site: "https://www.fadc.org.br/",
    categoria: "Direitos da Criança",
  },
  {
    nome: "Instituto Mamirauá",
    site: "https://www.mamiraua.org.br/",
    categoria: "Meio Ambiente",
  },
  {
    nome: "Associação Saúde Criança",
    site: "https://www.saudecrianca.org.br/",
    categoria: "Saúde",
  },
  {
    nome: "Instituto da Criança do Hospital das Clínicas da FMUSP",
    site: "https://www.hc.fm.usp.br/index.php/instituto-da-crianca",
    categoria: "Saúde",
  },
];

function criaInfoDiv(instituicao) {
  console.log(instituicao)

  const divInfo = document.createElement('div');
  divInfo.className="div-info"

  // Crie o conteúdo da div
  divInfo.innerHTML = `
    <h3>${instituicao.nome}</h3>
    <button onclick="window.location.href='${instituicao.site}'">Acessar</button>
  `;

  return divInfo;
}


const bolinhas = document.querySelectorAll('.bolinha');

const nav = document.getElementsByTagName('nav')[0]; 

function removerBolinhas() {
  const filhosParaRemover = [...document.body.children].filter(child => child !== nav);

  filhosParaRemover.forEach((child) => {
    child.remove();
  });
}

function adicionarNovasBolinhas(categoria){
  instituicoesDeCaridade.forEach((i) => {
    const novaDiv = document.createElement("div");
  
    if (i.categoria === "Saúde") {
      novaDiv.className = "brilho-bolinha-saude";
    } else if (i.categoria === "Ajuda Humanitária") {
      novaDiv.className = "brilho-bolinha-ajuda-humanitaria";
    } else if (i.categoria === "Assistência Social") {
      novaDiv.className = "brilho-bolinha-assistencia-social";
    } else if (i.categoria === "Educação") {
      novaDiv.className = "brilho-bolinha-educacao";
    } else if (i.categoria === "Direitos da Criança") {
      novaDiv.className = "brilho-bolinha-direitos-da-crianca";
    } else if (i.categoria === "Meio Ambiente") {
      novaDiv.className = "brilho-bolinha-meio-ambiente";
    }
  
    novaDiv.style.position = "absolute";
  
    // Gera posições aleatórias dentro dos limites da tela
    novaDiv.style.top =
      Math.random() * (window.innerHeight - novaDiv.offsetHeight) + "px";
    novaDiv.style.left =
      Math.random() * (window.innerWidth - novaDiv.offsetWidth) + "px";
  
    document.body.appendChild(novaDiv);
  });
}

function removerCaracteresEspeciais(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function renderizarInstituicoes(instituicoes) {
  instituicoes.forEach((i) => {
    const novaDiv = document.createElement('div');

    const categoriaFormatada = removerCaracteresEspeciais(i.categoria.toLowerCase());

    const classeCSS = `brilho-bolinha-${categoriaFormatada.replace(/\s+/g, '-')}`;

    novaDiv.addEventListener('click', () => {
      const infoDiv = criaInfoDiv(i);
  
      // Posiciona a div de informações ao lado da bolinha
      infoDiv.style.position = 'absolute';
      infoDiv.style.top = novaDiv.offsetTop + 'px';
      infoDiv.style.left = novaDiv.offsetLeft + novaDiv.offsetWidth + 'px';
  
      // Adiciona a div de informações ao body
      document.body.appendChild(infoDiv);
    });

    novaDiv.className = classeCSS;
    novaDiv.style.position = 'absolute';
    novaDiv.style.top = Math.random() * (window.innerHeight - novaDiv.offsetHeight) + 'px';
    novaDiv.style.left = Math.random() * (window.innerWidth - novaDiv.offsetWidth) + 'px';

    document.body.appendChild(novaDiv);
  });
}

function filtrar() {
  const select = document.getElementById('categorias');
  
  const result=instituicoesDeCaridade.filter((instituicao)=>{
    if(instituicao.categoria==select.value){
      return instituicao
    }
  })
  
  removerBolinhas()

  renderizarInstituicoes(result)
}

const btnFiltra = document.getElementById('btnFiltro');
btnFiltra.addEventListener('click', filtrar);

instituicoesDeCaridade.forEach((i) => {
  const novaDiv = document.createElement("div");

  if (i.categoria === "Saúde") {
    novaDiv.className = "brilho-bolinha-saude";
  } else if (i.categoria === "Ajuda Humanitária") {
    novaDiv.className = "brilho-bolinha-ajuda-humanitaria";
  } else if (i.categoria === "Assistência Social") {
    novaDiv.className = "brilho-bolinha-assistencia-social";
  } else if (i.categoria === "Educação") {
    novaDiv.className = "brilho-bolinha-educacao";
  } else if (i.categoria === "Direitos da Criança") {
    novaDiv.className = "brilho-bolinha-direitos-da-crianca";
  } else if (i.categoria === "Meio Ambiente") {
    novaDiv.className = "brilho-bolinha-meio-ambiente";
  }

  novaDiv.style.position = "absolute";

  // Adiciona informações da instituição diretamente ao elemento
  novaDiv.instituicao = i;

  // Adiciona evento de clique à bolinha
  novaDiv.addEventListener('click', () => {
    const infoDiv = criaInfoDiv(novaDiv.instituicao);

    // Posiciona a div de informações ao lado da bolinha
    infoDiv.style.position = 'absolute';
    infoDiv.style.top = novaDiv.offsetTop + 'px';
    infoDiv.style.left = novaDiv.offsetLeft + novaDiv.offsetWidth + 'px';

    // Adiciona a div de informações ao body
    document.body.appendChild(infoDiv);
  });

  // Gera posições aleatórias dentro dos limites da tela
  novaDiv.style.top =
    Math.random() * (window.innerHeight - novaDiv.offsetHeight) + "px";
  novaDiv.style.left =
    Math.random() * (window.innerWidth - novaDiv.offsetWidth) + "px";

  document.body.appendChild(novaDiv);
});

