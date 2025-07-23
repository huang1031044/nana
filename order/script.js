emailjs.init("AoXLN9FqsrfZkmmKr"); // 你的 Public Key

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
  })
  .then(() => {
    alert("送信成功しました！");
    this.reset();
    document.getElementById("quantity").value = "1";
  })
  .catch((error) => {
    alert("送信に失敗しました：" + error.text);
  });
});

function changeQuantity(change) {
  const input = document.getElementById("quantity");
  let value = parseInt(input.value) + change;
  if (value >= 1 && value <= 9) {
    input.value = value;
  }
}
