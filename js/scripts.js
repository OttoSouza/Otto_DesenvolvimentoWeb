const lista = document.getElementById("atividade");
const listar_livros = document.getElementById("listar");

//TODO lista static
const atividades = [
  "Paralax (Obrigatório, ver exemplo)",
  "Rotate",
  "Google fonte",
  "Fontawesome",
  "Banco de dados html a escolha (com js)(Obrigatório, ver exemplo)",
  "Pode usar o jquery (caso não use, reveja como fazer o Paralax)",
  "Não pode usar o BOOTSTRAP para estruturar a página. Mas pode usar para os componentes internos (o mesmo para qq framework de interface)",
  "O estilo deverá ser escrito em SASS",
  "A pasta principal do projeto deverá conter Seu nome (como a pasta raiz)",
  "As pastas internas são img css js. Não esqueçam do index.html e contato.html"
];
// TODO render atividades
const onRender = () => {
  atividades.map(atividade => {
    //criando os li
    let item = document.createElement("li");
    // adicionando o texto
    let text_node = document.createTextNode(atividade);
    let link = document.createElement("a");
    link.setAttribute("href", "#");

    let index = atividades.indexOf(atividade);
    link.setAttribute("onclick", "check(" + index + ")");

    let text_link = document.createTextNode("Verificar");
    link.appendChild(text_link);

    //passando os filhos
    item.appendChild(text_node);
    item.appendChild(link);
    lista.appendChild(item);
  });
};

//TODO verificando lista de atividades
const check = index => {
  var h4 = document.createElement("h4");
  h4.style.color = "green";
  var text = document.createTextNode(`Item ${index + 1}, verificado`);
  h4.appendChild(text);
  lista.appendChild(h4);
};

//TODO usando localStorage
const adicionar = () => {
  var nome_livro = document.getElementById("nome_livro").value;
  var autor_livro = document.getElementById("autor").value;
  var resumo_livro = document.getElementById("res").value;
  // Pega a lista já cadastrada, se não houver vira um array vazio
  var livros = JSON.parse(localStorage.getItem("livros") || "[]");
  // Adiciona pessoa ao cadastro
  livros.push({
    nome: nome_livro,
    autor: autor_livro,
    resumo: resumo_livro
  });

  // Salva a lista alterada
  localStorage.setItem("livros", JSON.stringify(livros));

  console.log("Salva com sucesso.");
};

//TODO criando a a table
const listar = () => {
  var livros = JSON.parse(localStorage.getItem("livros"));

  livros.map(livro => {
    let tr = document.createElement("tr");
    let td_nome = document.createElement("td");
    let td_autor = document.createElement("td");
    let td_resumo = document.createElement("td");
    let td_remover = document.createElement("td");

    let button_remover = document.createElement("button");
    let text_button_remover = document.createTextNode("Remover");
    button_remover.appendChild(text_button_remover);

    let index = livros.indexOf(livro);
    button_remover.setAttribute("onclick", "remover(" + index + ")");
    let text_nome = document.createTextNode(livro.nome);
    let text_autor = document.createTextNode(livro.autor);
    let text_resumo = document.createTextNode(livro.resumo);
    button_remover.setAttribute("id", "remover_button");

    tr.appendChild(td_nome);
    tr.appendChild(td_autor);
    tr.appendChild(td_resumo);
    tr.appendChild(td_remover);

    td_nome.appendChild(text_nome);
    td_autor.appendChild(text_autor);
    td_resumo.appendChild(text_resumo);
    td_remover.appendChild(button_remover);

    listar_livros.appendChild(tr);
  });
};

const remover = index => {
  var livros = JSON.parse(localStorage.getItem("livros"));
  livros.map(livro => {
    const aux = livros.indexOf(livro);
    if (aux === index) {
      livros.splice(index, 1);
      alert(`O livro: " ${livro.nome} " foi Removido com sucesso`);
    }
  });
  localStorage.setItem("livros", JSON.stringify(livros));
  location.reload();
};
