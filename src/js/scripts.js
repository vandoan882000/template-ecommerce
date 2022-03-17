function hienLink() {
  window.location.replace("./product.html?id=1");
  const params = new URLSearchParams(window.location.search);
  console.log(params.get("id"));
  const id = document.querySelector(".product__infor");
  id.textContent = params.get("id");
}

