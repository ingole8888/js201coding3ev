var user=JSON.parse(localStorage.getItem('user'))
  let purchasedVouchers=JSON.parse(localStorage.getItem('purchase')) || []
  function balance(){
    
    let wallet_balance=document.getElementById('wallet_balance')
    wallet_balance.innerText=JSON.parse(localStorage.getItem('user')).wallet;
  }
balance()
  async function showVoucher(){
    try {
      let res=await fetch('https://masai-vouchers-api.herokuapp.com/api/vouchers')
      let data=await res.json()
      append(data[0].vouchers)
      
    } catch (error) {
      console.log(error)
    }
  }
  showVoucher()
  function append(data){
    //console.log(data)
    let container=document.getElementById('voucher_list')
    data.forEach(function(el){
         let div=document.createElement('div')
         div.setAttribute('class','voucher')
         let img=document.createElement('img')
         img.src=el.image;
         
         let title=document.createElement('h2')
         title.innerText=el.name;

         let price=document.createElement('h3')
         price.innerText=el.price;

         let button=document.createElement('button')
         button.innerText='Buy'
         button.setAttribute('class','buy_voucher')
         button.addEventListener('click',function(){
               selected(el)
         })
         div.append(img,title,price,button)
         container.append(div)
    })
  }
  function selected(el){
     let balance_value=Number(user.wallet)-Number(el.price)
     //console.log(balance_value)
     if(balance_value>=0){
       alert('Hurray! purchase successful')
       console.log(el)
       console.log(purchasedVouchers)
       purchasedVouchers.push(el)
     user.wallet=balance_value;
     localStorage.setItem('purchase',JSON.stringify(purchasedVouchers))
     localStorage.setItem('user',JSON.stringify(user))
     balance()
     }
     else if(balance_value<0){
       alert('Sorry! insufficient balance')
     }
  }