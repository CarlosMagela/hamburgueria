

const items = [

    {
        id: 0,
        nome: 'x-bacon',
        preco: 19.90,
        qtd: 0
       
    },

    {
        id: 1,
        nome: 'x-salada',
        preco: 19.90,
        qtd: 0
    },

    {
        id: 2,
        nome: 'Costelão burguer',
        preco: 19.90,
        qtd: 0
    },

    {
        id: 3,
        nome: 'Duplo cheddar',
        preco: 19.90,
        qtd: 0
    },
    

]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        containerProdutos.innerHTML+= `
        
        <div class="produtos-single">
            
        <p>`+val.nome+`</p>
        <p>`+val.preco+`</p>
        <p>`+val.qtd+`</p>
        <a key="`+val.id+`" href=""> Add ao Carrinho<a/>

        </div>
        `;
       
    })
}
inicializarLoja();

atualizarCarrinho = () => {
    
    console.log(atualizarCarrinho)
}

atualizarCarrinho = () => {
    console.log(atualizarCarrinho);
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length;i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].qtd++;
        var total = val.preco * val.qtd;
        preco++;
        atualizarCarrinho();

    })
}