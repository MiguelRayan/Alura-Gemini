function pesquisar(){

let section = document.getElementById("resultados-pesquisa");

let resultados = "";

let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

let title = "";
let desc = "";
let tag = "";

    if(campoPesquisa == ""){
        section.innerHTML = "Vish, não conheço esse prato."
        return;
    }

let encontrouResultados = false;

for(let i of dados){
    title = i.titulo.toLowerCase();
    desc = i.descricao.toLowerCase();
    tag = i.tags.toLowerCase();

    if(title.includes(campoPesquisa) || desc.includes(campoPesquisa) || tag.includes(campoPesquisa)){
        encontrouResultados = true;
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${i.titulo}</a>
            </h2>
            <p class="descricao-meta">${i.descricao}</p>
            <a href = "${i.link}" target="_blank">Receita</a>
        </div>
        `;
    }
}

    if (!encontrouResultados) {
        resultados = "<p>OPS! Não temos a receita desse prato.</p>";
    }

section.innerHTML = resultados;
}