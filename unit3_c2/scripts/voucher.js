//let amount = JSON.parse(localStorage.getItem("amount")) || 0;
//document.getElementById("wallet_balance").innerText=amount;


let url="https://masai-vouchers-api.herokuapp.com/api/vouchers";

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    let data = res;
    append(data)
    console.log(data);
})
.catch(function(err){
    console.log(err);
})

function append(data){
    var container=document.getElementById("voucher_list");
    container.innerHTML=null;
    data.map(function(el){
        let div=document.createElement("div");
        div.setAttribute("class","voucher");

        let name =document.createElement("h3");
        name.innerText=el.name;

        let img =document.createElement("img");
        img.src=el.image;

        let price =document.createElement("h3");
        price.innerText=el.price;

        let btn=document.createElement("button");
        btn.setAttribute("id","buy_voucher");
        btn.addEventListener("click",function(){
            show(el);
        })
        btn.innerText="Buy Voucher";
        div.append(name,img,price,btn);
        //var container=document.getElementById("voucher_list");
        container.append(div);
        console.log(div);
    })
}
function show(el){
    window.location="purchase.html";
    localStorage.setItem("purchase",JSON.stringify(el));
}
