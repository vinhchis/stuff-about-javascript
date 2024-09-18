let listProduct = [
  {
    id: 1,
    name: "Banh my",
    price: 200,
    status: true,
  },
  {
    id: 2,
    name: "Com",
    price: 300,
    status: false,
  },
  {
    id: 3,
    name: "Bun bo",
    price: 1000,
    status: true,
  },
];

const productTableBody = document.getElementById("productTableBody");
const btnCreate = document.getElementById("btnCreate");
const containerForm = document.querySelector(".container-form");
const formProduct = document.querySelector("#form-product");

// fields form
const idProductInput = document.getElementById("id-product");
const nameProductInput = document.getElementById("product-name");
const priceProductInput = document.getElementById("price-product");
const statusProductInputs = document.getElementsByName("status-product");

function renderProducts() {
  const productRow = listProduct.map(
    (product) =>
      `
      <tr>
          <td>${product.id}</td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>
            <button class="btn ${
              product.status == true ? "btn-success" : "btn-danger"
            }">
              ${product.status == true ? "Active" : "DisActive"}
            </button>
          </td>
          <td>
              <button class="btn btn-danger" onclick="deleteProduct(${
                product.id
              })">Delete</button>
          </td>
          <td>
              <button class="btn btn-warning" onclick="editProduct(${
                product.id
              })">Update</button>
          </td>
          
      </tr>
      `
  );
  productTableBody.innerHTML = productRow.join("");
}

renderProducts();

function deleteProduct(id) {
  listProduct = listProduct.filter((product) => product.id != id);
  renderProducts();
}

btnCreate.addEventListener("click", function () {
  containerForm.classList.toggle("hiddenContainerForm");
});

// TODO: Add a product from form
formProduct.addEventListener("submit", function (event) {
  // prevent Reload
  event.preventDefault();
  const productId = idProductInput.value;
  const productName = nameProductInput.value;
  const productPrice = priceProductInput.value;
  let productStatus = null;

  for (var item of statusProductInputs) {
    if (item.checked) {
      productStatus = JSON.parse(item.value);
      break;
    }
  }

  // TODO: check Add-form or Update-form
  if (productId) {
    let product = listProduct.find((item) => item.id == productId);
    product.id = idProductInput.value;
    product.name = nameProductInput.value;
    product.price = priceProductInput.value;
    for (var item of statusProductInputs) {
      if (item.checked) {
        product.status = JSON.parse(item.value);
        break;
      }
    }

    btnCreate.textContent = "Add a Product";
    containerForm.classList.add("hiddenContainerForm");
  } else {
    // add-form
    idProductInput.hidden = true;
    const newProduct = {
      id: Math.ceil(Math.random() * 1000),
      name: productName,
      price: productPrice,
      status: productStatus,
    };
    // Add at top-array
    listProduct.unshift(newProduct);
  }

  resetForm();
  renderProducts();
});

// TODO:clear all fields
function resetForm() {
  idProductInput.value = null;
  nameProductInput.value = "";
  priceProductInput.value = "";
  statusProductInputs[0].checked = true;
}

function editProduct(productId) {
  btnCreate.textContent = "Update a Product";
  containerForm.classList.remove("hiddenContainerForm");
  idProductInput.hidden = false;
  const product = listProduct.find((item) => item.id == productId);

  // pull data to form
  if (product) {
    idProductInput.value = product.id;
    nameProductInput.value = product.name;
    priceProductInput.value = product.price;

    if (product.status == true) {
      statusProductInputs[0].checked = true;
    } else {
      statusProductInputs[1].checked = true;
    }
  }
}
