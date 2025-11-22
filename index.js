
const product=[
  {
    "id": "p1",
    "name": "Smartphone Model A",
    "rating": 4.5,
    "desc": "6.5\" AMOLED, 8GB RAM, 128GB storage. Fast charging & great camera.",
    "img": "All-IMAGES/item1.png",
    "price": 14999,
    "oldPrice": 19999,
    "discountPercent": 25.0
  },
  {
    "id": "p2",
    "name":"Wireless Headphone" ,
    "rating": 4.2,
    "desc": "Noise-cancelling, 30h battery life, comfortable over-ear design.",
    "img": "All-IMAGES/item2.png",
    "price": 3299,
    "oldPrice": 4199,
    "discountPercent": 21.5
  },
  {
    "id": "p3",
    "name": "Bluetooth Speaker C",
    "rating": 4.6,
    "desc": "Portable, waterproof speaker with stereo bass.",
    "img":"All-IMAGES/item3.png",
    "price": 1799,
    "oldPrice": 2299,
    "discountPercent": 21.8
  },
  {
    "id": "p4",
    "name": "Fast Charger D",
    "rating": 4.4,
    "desc": "65W GaN charger, dual USB-C, compact & safe.",
    "img": "All-IMAGES/item4.png",
    "price": 1199,
    "oldPrice": 1499,
    "discountPercent": 20.0
  },
  {
    "id": "p5",
    "name": "Smartwatch E",
    "rating": 4.0,
    "desc": "Heart-rate & SpO₂ tracking, GPS, 7-day battery.",
    "img": "All-IMAGES/item5.png",
    "price": 4499,
    "oldPrice": 5499,
    "discountPercent": 18.2
  },
  {
    "id": "p6",
    "name": "Earbuds F",
    "rating": 4.3,
    "desc": "Low-latency mode, deep bass, compact charging case.",
    "img": "All-IMAGES/item6.png",
    "price": 10000,
    "oldPrice": 2699,
    "discountPercent": 22.2
  },
  {
    "id": "p7",
    "name": "Power Bank 20,000mAh",
    "rating": 4.1,
    "desc": "High-capacity, multi-port fast charging.",
    "img": "All-IMAGES/item7.png",
    "price": 1599,
    "oldPrice": 1999,
    "discountPercent": 20.0
  },
  {
    "id": "p8",
    "name": "USB-C Durable Cable",
    "rating": 4.7,
    "desc": "2m braided cable, fast-charging support.",
    "img": "All-IMAGES/item8.png",
    "price": 399,
    "oldPrice": 499,
    "discountPercent": 20.0
  }
  ,
];



const span=document.querySelector("#cart-icon");
const cartitem=document.querySelector(".cart-items");
const cart=document.querySelector(".cart");
const cartsilder=document.querySelector(".cart-slider");
const closeslider=document.querySelector(".close-btn");
const produectlist=document.querySelector(".product-list");
const total=document.querySelector(".total");
const checkout=document.querySelector(".checkout-btn");
const category=document.querySelector("#category");
const applyFilters=document.querySelector("#applyFilters");
let Addcart=0;
let show=0;





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



showcartlist();
 function Showprodect(){
  for(let i=0;i<product.length;i++)
  {
    
   

    let box=document.createElement("div");
    box.className="box";
    box.innerHTML=`<img src="${product[i].img}" id="img" alt="Smartphone Model A">
        <div class="info">
            <h4 class="name">${product[i].name}</h4>
            <p class="desc">${product[i].desc}</p>
            <div class="meta">
                <div class="rating">
                    <span>${product[i].rating}</span>
                    <span class="stars">★★★★☆</span>
                </div>
                <div class="price">
                    <span class="current">₹${product[i].price}</span>
                    <span class="old">₹${product[i].oldPrice}</span>
                </div>
            </div>
            <button class="btn">Add to Cart</button>
        </div>`;

        const btnn=box.querySelector(".btn");
        btnn.addEventListener("click",()=>{
         

       
if(cartData.some(p=>p.id===product[i].id))
          {
            alert("alredy in cart list 👍");
            return;
            
          }
          else{

             cartData.push({
  id: product[i].id,
  name: product[i].name,
  img: product[i].img,
  price: product[i].price,
  qty: product[i].qty
});
 saveCart(cartData)

          let cartbox=document.createElement("div");
          Addcart++;
          saveCartCount(Addcart);
          span.innerHTML=Addcart;
          cartbox.className="cart-item";
          cartbox.innerHTML=`
          <img src="${product[i].img}" class="cart-img">
  <div class="cart-details">
    <h4 class="cart-title">${product[i].name}</h4>
    <p class="cart-price">${product[i].price}</p>

    <div class="cart-qty">
      <button class="qty-btn-dec">−</button>
      <input type="number" class="qty-input" value="1">
      <button class="qty-btn-inc">+</button>
      <button class="delete-btn">❌</button>
    </div>
  </div>
          `;
          
        
          let price=Number(product[i].price);
          let count=1;
          let item=price*count;
          show+=item;
          total.innerHTML=` Total: <strong>${show}</strong>`;
          cartitem.appendChild(cartbox);
          const qtydec=cartbox.querySelector(".qty-btn-dec")
          const qtyinc=cartbox.querySelector(".qty-btn-inc")
          const qtyvalue=cartbox.querySelector(".qty-input")
          const del=cartbox.querySelector(".delete-btn");
          qtydec.addEventListener("click",()=>{
            count--;
            qtyvalue.value=count;
            if(count<1)
            {
              count=1;
              qtyvalue.value=count;
            }
            else{
            let qty=price*count;
            show=show-item+qty;
            item=qty;
           
            
            
            store();
            }
          })
          qtyinc.addEventListener("click",()=>{
            count++;
            console.log(count)
            qtyvalue.value=count;
            let qty=price*count;
            show=show-item+qty;
            item=qty;
           store();
            
          });
          

          del.addEventListener("click",()=>{
            cartbox.remove();
            Addcart--;
            span.innerHTML=Addcart;
            show-=item;
            store();
            console.log(product[i].id)
            if(product[i].id===product[i].id)
          {

            cartData.splice(product[i],1);
            console.log(cartData);
             saveCart(cartData)
         
          }
            

          });


      }
          });
        
    produectlist.appendChild(box);
  }

 
  check();
}
Showprodect();

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
  })

}
showslider();
applyFilters.addEventListener("click", () => {
        
  const priceRange = document.getElementById("price").value;
  if (priceRange === "all") {
    showslider();
    return;
  }
  else{
    const priceRange = document.getElementById("price").value;
    produectlist.innerHTML="";
  const [min, max] = priceRange.split("-").map(Number);
  const range = product.filter(p => p.price >= min && p.price <= max);
  range.forEach(p => {
    let box = document.createElement("div");
    box.className = "box2";
    box.innerHTML = `
      <img src="${p.img}" id="img" >
      <div class="info">
        <h4 class="name">${p.name}</h4>
        <p class="desc">${p.desc}</p>
        <div class="meta">
          <div class="rating">
            <span>${p.rating}</span>
            <span class="stars">★★★★☆</span>
          </div>
          <div class="price">
          
          <span class="current">₹${p.price}</span>
            <span class="old">₹${p.oldPrice}</span>
          </div>
        </div>
        <button class="btn">Add to Cart</button>
      </div>`;
      
        const btnn=box.querySelector(".btn");
        btnn.addEventListener("click",()=>{
          if(cartData.some(p=>p.id===p.id))
          {
            alert("alredy in cart list 👍");
            return;
            
          }
          else{

             cartData.push({
  id: p.id,
  name: p.name,
  img: p.img,
  price: p.price,
  qty: p.qty
});
 saveCart(cartData)

          Addcart++;
           span.innerHTML=Addcart;
          console.log("hii");
          let cartbox=document.createElement("div");
          Addcart++;
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
            saveqty(count);
            console.log(item);
             
           
          });

          const del=cartbox.querySelector(".delete-btn");
          del.addEventListener("click",()=>{
            cartbox.remove();
            Addcart--;
            span.innerHTML=Addcart;
            show-=item;
            store();
            if(p.id===p.id)
          {

            cartData.splice(p,1);
            console.log(cartData);
            console.log(p.id)
          saveCart(cartData)
          }
          
          });
        }
  });
      
      produectlist.appendChild(box);

      
  });
}
});



function check()
{
checkout.addEventListener("click",()=>{
console.log("hii")
  alert("Thanks For Buy The Produect 🎄")
  clearCartStorage()
  
});
}
function store()
{
  
total.innerHTML=`Total:₹<strong>${show}</strong>`; 
  
}
   
  

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
      
