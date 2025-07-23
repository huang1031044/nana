// EmailJS 初始化
emailjs.init("AoXLN9FqsrfZkmmKr");

document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.send("service_nbs0ejc", "template_d6a5onc", {
    product: this.product.value,
    quantity: this.quantity.value,
    name: this.name.value,
    phone: this.phone.value,
    zipcode: this.zipcode.value,
    address: this.address.value,
    delivery: this.delivery.value,
    payment: this.payment.value,
    note: this.note.value,
  }).then(function () {
    alert("訂單已送出！");
    document.getElementById("order-form").reset();
    document.getElementById("quantity").value = 1;
  }, function (error) {
    alert("發送失敗：" + JSON.stringify(error));
  });
});

function increaseQuantity() {
  const quantity = document.getElementById("quantity");
  if (parseInt(quantity.value) < 9) {
    quantity.value = parseInt(quantity.value) + 1;
  }
}

function decreaseQuantity() {
  const quantity = document.getElementById("quantity");
  if (parseInt(quantity.value) > 1) {
    quantity.value = parseInt(quantity.value) - 1;
  }
}
