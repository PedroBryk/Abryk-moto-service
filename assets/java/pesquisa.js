var campoPesquisa = document.querySelector(".filtro");

campoPesquisa.addEventListener("input", function() {

    var serviços = document.querySelectorAll(".serviço");

    if (this.value.length > 0) {
        for (var i = 0; i < serviços.length; i++) {
            var serviço = serviços[i];
            var tdNome = serviço.querySelector(".serviço-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                serviço.classList.add("invisivel");
            } else {
                serviço.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < serviços.length; i++) {
            var serviço = serviços[i];
           serviço.classList.remove("invisivel");
        }
    }
      
});




