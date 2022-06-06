function balance(){
    
    let wallet_balance=document.getElementById('wallet_balance')
    wallet_balance.innerText=JSON.parse(localStorage.getItem('user')).wallet;
  }
  balance()
let vouchers=JSON.parse(localStorage.getItem('purchase'))
  function append(vouchers){
    console.log(vouchers)
    let container=document.getElementById('purchased_vouchers')
    vouchers.forEach(function(el){
      let div=document.createElement('div')
       
         let img=document.createElement('img')
         img.src=el.image;
         
         let title=document.createElement('h2')
         title.innerText=el.name;

         let price=document.createElement('h3')
         price.innerText=el.price;
       div.append(img,title,price)
       container.append(div)
    })

  }
  append(vouchers)
    



