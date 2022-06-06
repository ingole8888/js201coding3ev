function get(id){
    return document.getElementById("id").value;
}

let database=JSON.parse(localStorage.getItem("user")) || [];
function userData(n,e,ad,a){
    this.name=n;
    this.email=e;
    this.address=ad;
    this.amount=a;
}

function myFunction(event){
    event.preventDefault();
    let form = document.getElementById("user")
    let name=form.name.value;
    let email=form.email.value;
    let address=form.address.value;
    let amount=form.amount.value;

    let newData=new userData(name,email,address,amount);
    database.push(newData);

    localStorage.setItem("user",JSON.stringify(database));
    console.log(database);
    //console.log(user);
}