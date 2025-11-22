
  const menu=document.querySelector(".menu-btn");
  const menuslider=document.querySelector(".menu");
const span=document.querySelector("#cart-icon");
const cartitem=document.querySelector(".cart-items");
const cart=document.querySelector(".cart");
const cartsilder=document.querySelector(".cart-slider");
const closeslider=document.querySelector(".close-btn");
const total=document.querySelector(".total");

let Addcart=0;
let show=0;




function showslider()
{
  cart.addEventListener("click",()=>{
    cartsilder.classList.add("right");
  })
  closeslider.addEventListener("click",()=>{
    cartsilder.classList.remove("right");
  })


  const menu=document.querySelector(".menu-btn");
  const menuslider=document.querySelector(".menu");
  const menuclose=document.querySelector("#menu-close")

  menu.addEventListener("click",(e)=>{
    console.log("hii");
    menuslider.classList.add("open")
    
  });

  menuclose.addEventListener("click",()=>{
    menuslider.classList.remove("open");
  });
    
  
}
showslider();


function store()
{
total.innerHTML=`Total:₹<strong>${show}</strong>`; 
}


function saveCart(cartArray) {
  localStorage.setItem("cartItems", JSON.stringify(cartArray));
}

function loadCart() {
  return JSON.parse(localStorage.getItem("cartItems")) || [];
}

function saveCartCount(count) {
  localStorage.setItem("cartCount", count);
}

function loadCartCount() {
  return Number(localStorage.getItem("cartCount")) || 0;
}



function clearCartStorage() {
  localStorage.removeItem("cartItems");
 
  localStorage.removeItem("cartCount");
}


let cartData = loadCart();  
let Addcarticon= loadCartCount(); 


saveCart(cartData);
saveCartCount(Addcarticon);


console.log(cartData)



function showcartlist()
{
  cartData.forEach(p=>{
    
    
      let cartbox=document.createElement("div");
          Addcart++;
          span.innerHTML=Addcart;
          cartbox.className="cart-item";
          cartbox.innerHTML=`
          <img src="${p.img}" class="cart-img" >
  <div class="cart-details">
    <h4 class="cart-title">${p.name}</h4>
    <p class="cart-price">${p.price}</p>

    <div class="cart-qty">
      <button class="qty-btn-dec">−</button>
      <input type="number" class="qty-input" value="1">
      <button class="qty-btn-inc">+</button>
      <button class="delete-btn">❌</button>
    </div>
  </div>
          `;
            
           
          let price=Number(p.price);
          let count=1;
          
          let item=price*count;
          show+=item;
          store();
          console.log(item);
          cartitem.appendChild(cartbox);
          const qtydec=cartbox.querySelector(".qty-btn-dec")
          const qtyinc=cartbox.querySelector(".qty-btn-inc")
          const qtyvalue=cartbox.querySelector(".qty-input")
          qtydec.addEventListener("click",()=>{
            count--;
            if(count<1)
          {
            count=1;
            qtyvalue.value=count
          }
          else{
            qtyvalue.value=count;
             let qty=price*count;
           show=show-item+qty;
           item=qty;
           store();
            console.log(item);
          }
           
          });
          qtyinc.addEventListener("click",()=>{
            count++;
             qtyvalue.value=count;
           let qty=price*count;
           show=show-item+qty;
           item=qty;
            store();
            console.log(item);
             
           
          });

          const del=cartbox.querySelector(".delete-btn");
          del.addEventListener("click",()=>{
          if(p.id===p.id)
          {

            cartData.splice(p,1);
            console.log(cartData);
            console.log(p.id)
          saveCart(cartData)
          }
            Addcart--;
            saveCartCount(Addcart)
            cartbox.remove();
            show-=item;
            store();
          
          });

        });
    
      }
      
showcartlist();