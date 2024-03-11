const productData = [
  {
    image:
      "https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWlyfGVufDB8fDB8fHww",
    name: "pink chair",
    headline: "be confort",
    price: "12,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYWlyfGVufDB8fDB8fHww",
    name: "yellow chair",
    headline: "be soft",
    price: "10,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
    name: "arm chair",
    headline: "stay helthy",
    price: "15,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww",
    name: "grey chair",
    headline: "be confort",
    price: "13,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYWlyfGVufDB8fDB8fHww",
    name: "black chair",
    headline: "be confort",
    price: "11,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww",
    name: "whait stool",
    headline: "confort is first",
    price: "12,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617364852223-75f57e78dc96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNoYWlyfGVufDB8fDB8fHww",
    name: "flate chair",
    headline: "stay align",
    price: "14,000",
  },
];

const product = document.querySelector(".products");

function showContent() {
  let clutter = "";
  productData.forEach((obj, index) => {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                    <div class="image w-[14rem] h-[13rem] overflow-hidden bg-zinc-200 rounded-xl">
                    <img class="w-full h-full object-cover" src="${obj.image}" alt="">
                    </div>
                        <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">${obj.name}.</h1>
        <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${obj.headline}</h3>
                <h4 class="font-semibold mt-2">₹${obj.price}</h4>
            </div>
            <button data-index="${index}" class=" add w-10 h-10 rounded-full shader text-yellow-400">
            <i data-index="${index}" class="add ri-add-line"></i>
            </button>
        </div>
    </div>
    </div>`;
  });
  product.innerHTML = clutter;
}
showContent();

const populer = document.querySelector(".populars");
const populerData = [
  {
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYWlyfGVufDB8fDB8fHww",
    name: "black chair",
    headline: "be confort",
    price: "11,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWlyfGVufDB8fDB8fHww",
    name: "pink chair",
    headline: "be confort",
    price: "12,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617364852223-75f57e78dc96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNoYWlyfGVufDB8fDB8fHww",
    name: "flate chair",
    headline: "stay align",
    price: "14,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYWlyfGVufDB8fDB8fHww",
    name: "yellow chair",
    headline: "be soft",
    price: "10,000",
  },

  {
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww",
    name: "grey chair",
    headline: "be confort",
    price: "13,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww",
    name: "whait stool",
    headline: "confort is first",
    price: "12,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
    name: "arm chair",
    headline: "stay helthy",
    price: "15,000",
  },
];

function showPopulerContent() {
  let clutter = "";
  populerData.forEach((obj) => {
    clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
    <div class="w-20 h-20  flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
        <img class="w-full h-full object-cover"
            src="${obj.image}"
            alt="">
    </div>
    <div class="data py-2 w-full">
        <h1 class="leading-none font-semibold">${obj.name}</h1>
        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${obj.headline}</h4>
        <h4 class="mt-3 font-semibold text-zinc-500">${obj.price}</h4>
    </div>
</div>`;
  });
  populer.innerHTML = clutter;
}
showPopulerContent();
const cartIcon = document.querySelector(".carticon");
const cartExpnd = document.querySelector(".cartexpnd");
const cartNumCount = document.querySelector(".cartCount");
const removeCart = document.querySelector(".removeCart");
let cart = [];

function removeCartItem(index) {
  cart.splice(index, 1); // Remove the item from the cart array
  updateCartDisplay(); // Update the display after removing the item
}

function addToCart() {
  product.addEventListener("click", function (e) {
    if (e.target.classList.contains("add")) {
      cart.push(productData[e.target.dataset.index]);
      updateCartDisplay(); // Update the display after adding the item
    }
  });
}

function updateCartDisplay() {
  let clutter = "";
  cart.forEach((prod, index) => {
    clutter += `<div class="removeCart flex items-center gap-2 bg-white p-2 rounded-lg">
                  <div class="flex gap-3 mr-1 overflow-hidden">
                    <div class="w-10 h-10 flex-shrink- rounded-lg bg-red-500">
                      <img class="w-full h-full object-cover" src="${prod.image}" alt="${prod.name}">
                    </div>
                    <div>
                      <h3 class="font-semibold">${prod.name}</h3>
                      <h5 class="text-sm font-semibold opacity-80">₹${prod.price}</h5>
                    </div>
                  </div>
                  <h3 class="remove w-10 h-10 text-[1.5rem] cursor-pointer" onclick="removeCartItem(${index})">
                    <i class="h-10 w-10 text-semibold ri-close-line"></i>
                  </h3>
                </div>
                `;
  });
  cartExpnd.innerHTML = clutter;
  cartNumCount.innerHTML = cart.length;
}

function cartShow() {
  cartIcon.addEventListener("click", function () {
    if (cartExpnd.style.display === "block") {
      cartExpnd.style.display = "none";
    } else {
      cartExpnd.style.display = "block";
    }
  });
}

cartShow();
addToCart();
