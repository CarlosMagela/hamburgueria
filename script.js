const totalPrice = items.reduce((total, preco)=> total+(val.id * val.preco),0)
                


const items = [
        
    {
        id: 0,
        nome: 'x-bacon',
        preco: 19.90,
        img: 'img/h2.jfif',
        qtd: 0
       
    },
    
    {
        id: 1,
        nome: 'x-salada',
        preco: 19.90,
        img: 'img/banner.jfif',
        qtd: 0
    },
    
    {
        id: 2,
        nome: 'Costelão burguer',
        img: 'img/h3.jfif',
        preco: 19.90,
        qtd: 0
    },
    
    {
        id: 3,
        nome: 'Duplo cheddar',
        preco: 19.90,
        img: 'img/3hab.jfif',
        qtd: 0
    },
    
    
    ]
    
    inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    var containerPedido = document.getElementById('pedido');
    items.map((val)=>{
        containerProdutos.innerHTML+= `
        
        <div class="produtos-single">
            <img src="`+val.img+`"/>
        <p>`+val.nome+`</p>
        <p>R$ `+val.preco+`</p>
       
       
         
        <a key="`+val.id+`" href="#"> Add ao Carrinho<a/>
    
        </div>
        `;
       
    })
    }
    inicializarLoja();
    
    atualizarCarrinho = () => {
        var containerCarrinho = document.getElementById('carrinho');
        containerCarrinho.innerHTML = "";
        
    items.map((val)=>{

      
        
        if(val.qtd > 0 ){

            
            const totalPrice = items.reduce((total, id, preco)=> total+(val.preco * val.qtd),0)
        
            
            containerCarrinho.innerHTML+= `
        
        
        <p>`+val.nome+` -- quant:  `+val.qtd+` -- preço: R$ `+val.preco * val.qtd+`</p>
        
            
     <hr>
    
        `;

       }

       
    })
    }
    
   
    
    var links = document.getElementsByTagName('a');

   
    
    for(var i = 0; i < links.length;i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].qtd++;
       
        
        
        
        atualizarCarrinho();


  
    
    })
    }

    