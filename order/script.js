emailjs.init("AoXLN9FqsrfZkmmKr"); // 你的 Public Key

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;

  const templateParams = {
    product: form.product.value,
    quantity: form.quantity.value,
    name: form.name.value,
    phone: form.phone.value,
    zipcode: form.zipcode.value,
    address: form.address.value,
    delivery: form.delivery.value,
    payment: form.payment.value,
    note: form.note.value,
  };

  emailjs.send("service_nbs0ejc", "template_d6a5onc", templateParams)
    .then(function () {
      alert("送信成功しました！");
      form.reset();
      form.quantity.value = 1;
    }, function (error) {
      alert("送信に失敗しました：" + JSON.stringify(error));
    });
});

function changeQuantity(amount) {
  const qtyInput = document.querySelector('input[name="quantity"]');
  let current = parseInt(qtyInput.value);
  if (!isNaN(current)) {
    const newQty = Math.min(9, Math.max(1, current + amount));
    qtyInput.value = newQty;
  }
}
