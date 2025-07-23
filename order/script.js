function increaseQuantity() {
  const input = document.getElementById("quantity");
  let value = parseInt(input.value, 10);
  if (value < 9) input.value = value + 1;
}

function decreaseQuantity() {
  const input = document.getElementById("quantity");
  let value = parseInt(input.value, 10);
  if (value > 1) input.value = value - 1;
}

document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("送出成功，感謝您的訂購！");
  // 這裡可以接 EmailJS 或 Google Form
});
