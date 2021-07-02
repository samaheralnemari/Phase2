
//Elements (add, remove, search)
const DataList=[
    {
        title:'Almarai Full Fat Fresh Milk 2.85L',
        price:'SAR 12.00',
        image:'Image/milk.jpg',
    },
    {
        title:'Herbal Essences Bio:Renew Repair Argan Oil of Morocco Shampoo 400ml',
        price:'SAR 23.95',
        image:'Image/herbal.jpg',
    },
    {
        title:'Banana 1kg',
        price:'SAR 4.95',
        image:'Image/banana.jpg',
    },
    {
        title:'Lusine Brown Sliced Bread 600g',
        price:'SAR 5.75',
        image:'Image/bread.jpg',
    }];
    
    function viewElemnts(){ 
        var doc="";
        var i=1;
            DataList.forEach(x=>{    
                doc+=`<div class="card" style="width: 18rem;">
                <img src="${x.image}" class="card-img-top" alt="..." width="300px" height="300px">
                <div class="card-body">
                <h5 class="card-title" id="title${i}">${x.title}</h5>
                <p class="card-text" id="price${i}">${x.price}</p>
               
                </div>
                </div><br/><br/>`;
                i++;
        } )
        document.getElementById("Data").innerHTML=doc;
    }
    function viewElemntsadd(){ 
        var doc="";
        var i=1;
            DataList.forEach(x=>{    
                doc+=`<div class="card" style="width: 18rem;">
                <img src="${x.image}" class="card-img-top" alt="..." width="300px" height="300px">
                <div class="card-body">
                <h5 class="card-title" id="title${i}">${x.title}</h5>
                <p class="card-text" id="price${i}">${x.price}</p>
                <button class="btn btn-outline-success" id="${i}" type="button" onclick="AddElement(this.id);">Add</button>
                </div>
                </div><br/><br/>`;
                i++;
        } )
        document.getElementById("Data").innerHTML=doc;
    }
    function searchElement(){
        var inputValue=document.getElementById('myInput').value;
        DataList.forEach(x=>{
            if(x.title.indexOf(inputValue)!=-1){
                var i=x.title.indexOf(inputValue);
                const doc=`<div class="card" style="width: 18rem;">
                <img src="${x.image}" class="card-img-top" alt="..." width="300px" height="300px">
                <div class="card-body">
                <h5 class="card-title" id="title${i}">${x.title}</h5>
                <p class="card-text" id="price${i}">${x.price}</p>
                <button class="btn btn-outline-success" id="${i}" type="button" onclick="AddElement(this.id);">Add</button>
                </div>
                </div>`;
                //document.getElementById("Data").innerHTML="";
                document.getElementById("Data").innerHTML=doc;
            }})
    }
    //var i=0;
function AddElement(id){
    /*var li=document.createElement('li');
    //var list=[];
    var Element=document.getElementById('Data').value;
    var value=document.createTextNode(Element);
    li.appendChild(value);
    //list.push(Element);*/
    /*var li=document.createElement('li');
    var title=document.getElementById('title').value;
    var price=document.getElementById('price').value;
    li.appendChild(title);
    document.getElementById('Hide').appendChild(li);*/
    //var Element=document.getElementById('Data').value;
    //var priceid="price"+id+"";
    //var titleid="title"+id+"";

    var price=document.getElementById("price"+id+"").innerHTML;
    var title=document.getElementById("title"+id+"").innerHTML;

    //alert(price);
    //localStorage.setItem('price'+id+'',price);
    //localStorage.setItem('title'+id+'',title);
    //location.href = "Checkout.html?price="+price+"&title="+title;
/*var price="12SR";
var title="Milk";*/
    location.href = "Checkout.html?price="+price+"&title="+title;
    //localStorage.setItem('price'+i,Element.price);
    //localStorage.setItem('title'+i,Element.title);
    //i++;
    
}
function TotalPrice(){
    var total=0;
    for (x = 0; x <= i.length; x++) {
        var t=localStorage.getItem('price');
        total+=t;  
    }
    document.getElementById("Total").innerHTML=total;
}
function removeElemnt(){
    //var list=document.getElementsByTagName('ul');
    //var list=document.getElementById('cart');
    //list[0].innerHTML="";
    location.href = "AfterLogin.html";
}
function viewCart()
{    
    //var price= localStorage.getItem('price');
    //titlevar title= localStorage.getItem('title');
    var price=new URL(location.href).searchParams.get("price");
    var title=new URL(location.href).searchParams.get("title");
    //alert("hi");
    const doc=`
    <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
        <h6 class="my-0">${title}</h6>
        </div>
        <span class="text-muted">${price}</span>
        <button class="btn btn-outline-success" type="button" onclick="removeElemnt();">remove</button>
    </li>
    
    <li class="list-group-item d-flex justify-content-between">
        <span>Total (SR)</span>
        <strong>${price}</strong>
    </li>
    
    `;
    document.getElementById("cart").innerHTML=doc;
  }
  function Confirmation()
  {
      /*var firstName= localStorage.getItem('firstName');
      var lastName= localStorage.getItem('lastName');
      var phone= localStorage.getItem('phone');
      var address= localStorage.getItem('address');*/

      var firstName=new URL(location.href).searchParams.get("firstName");
      var lastName=new URL(location.href).searchParams.get("lastName");
      var phone=new URL(location.href).searchParams.get("phone");
      var address=new URL(location.href).searchParams.get("address");

      const doc=`<table style="">
      <tr>
        <td><b>First Name</b></td>
        <td>${firstName}</td>
      </tr>
      <tr>
        <td><b>Last Name</b></td>
        <td>${lastName}</td>
      </tr>

      <tr>
        <td><b>Phone</b></td>
        <td>${phone}</td>
      </tr>

      <tr>
        <td><b>Address</b></td>
        <td>${address}</td>
      </tr>
  </table>`;
      
      document.getElementById("Details").innerHTML=doc;
  }
  function Checkout(){
    var firstName=document.getElementById('firstName').value;
    var lastName=document.getElementById('lastName').value;
    var phone=document.getElementById('phone').value;
    var address=document.getElementById('address').value;

    /*localStorage.setItem('firstName',firstName);
    localStorage.setItem('lastName',lastName);
    localStorage.setItem('phone',phone);
    localStorage.setItem('address',address);*/
    /*const doc=`
        <p>${firstName}</p>
        <p>${lastName}</p>
        <p>${phone}</p>
        <p>${address}</p>
    `;
    document.getElementById("Details").innerHTML=doc;*/
    location.href = "Confirmation.html?firstName="+firstName+"&lastName="+lastName+"&phone="+phone+"&address="+address;
}

// User (login, change password)
const UserList=[
    {
        UserEmail:'samaher@gmail.com',
        UserPassword:'123456',
    },
    {
        UserEmail:'samaher92@gmail.com',
        UserPassword:'123456789',
    }];

function userLogin()
{
var email=document.getElementById('inputEmail').value;
var password=document.getElementById('inputPassword').value;

if(email=="" || password==""){
    alert('Please Complete All Required Fields..');
}else{
    UserList.forEach(x=>{
        if(x.UserEmail==email && x.UserPassword==password)
        {
            location.href = "AfterLogin.html";
        }else{
            alert('Invalid Credentials. Please try again.');
        }
    })
}
}

function ChangePassword()
{
    var password=document.getElementById('inputPassword').value;
    UserList.forEach(x=>{
        if(x.UserEmail==email)
        {
            x.UserPassword=password;
        }
    })   
}
