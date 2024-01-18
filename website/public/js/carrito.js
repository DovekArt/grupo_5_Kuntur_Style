console.log("carrito.js success");
let query = new URLSearchParams(location.search);

const getCarts = async () => {
  try {
    let response = await fetch("/api/carts/list-items");
    let result = await response.json();
    return result;
  } catch (error) {
    console.error;
  }
};

const addItem = async (id) => {
  try {
    let response = await fetch("/api/carts/add-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    let result = await response.json();
    showCart(result.carts);
  } catch (error) {
    console.error;
  }
};

const removeItem = async (id) => {
  try {
    let response = await fetch("/api/carts/remove-item", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    let result = await response.json();
    showCart(result.carts);
  } catch (error) {
    console.error;
  }
};

const removeItemFull = async (id) => {
  try {
    let response = await fetch("/api/carts/remove-item-full", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    let result = await response.json();
    showCart(result.carts);
  } catch (error) {
    console.error;
  }
};

const showCart = (carts) => {
  if(carts.length > 0){
    $('cart-box').hidden = false;
    $('btn-buy').hidden = false;
    $('msg-empty').hidden = true;
    $("cart-items").innerHTML = null;
    carts.forEach(({ id:idItem, product, quantity }) => {
      let { id, title, price, discount, images } = product;
      $("cart-items").innerHTML += `
          <tr>
          <td><img style="width: 100px" src="/images/products/${
            images[0].file
          }" alt=""></td>
          <td>${title}</td>
          <td>
              <div class="d-flex">
                  <button class="btn btn-sm btn-danger" onclick="removeItem(${id})"><i class="fas fa-minus"></i></button>
                  <input type="text" style="border: none; width:20px; text-align: center;" value="${quantity}">
                  <button class="btn btn-sm btn-success" onclick="addItem(${id})"><i class="fas fa-plus"></i></button>
              </div>
          </td>
          <td>${price - (price * discount) / 100}</td>
          <td>${(price - (price * discount) / 100) * quantity}</td>
          <td>
          <button class="btn btn-sm btn-danger" onclick="removeItemFull(${idItem})"><i class="fas fa-trash"></i></button>
          </td>
        </tr>`;
    });
  }else{
    $('cart-box').hidden = true;
    $('msg-empty').hidden = false;
    $('btn-buy').hidden = true;
  }

};

$("btn-cart") &&
  $("btn-cart").addEventListener("click", async () => {
    let { order, carts } = await getCarts();

    showCart(carts);
  });

$("btn-cart-add") &&
  $("btn-cart-add").addEventListener("click", async ({ target }) => {
    await addItem(target.value);
  });

$("btn-cart-removeAll") &&  $("btn-cart-removeAll").addEventListener("click", async({target}) => {
    try {
      let response = await fetch("/api/carts/remove-all", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: target.value,
        }),
      });
      let result = await response.json();
      showCart(result.carts);
    } catch (error) {
      console.error
    }
})
