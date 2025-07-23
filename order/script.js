
(function(){
  emailjs.init("AoXLN9FqsrfZkmmKr");
})();
function adjustQty(change) {
  const qtyInput = document.getElementById("qty");
  let value = parseInt(qtyInput.value) + change;
  if (value >= 1 && value <= 9) qtyInput.value = value;
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("service_nbs0ejc", "template_d6a5onc", this)
    .then(function() {
      document.getElementById("responseMsg").textContent = "✅ 訂單已送出！請稍候 Email 通知";
      document.getElementById("orderForm").reset();
    }, function(error) {
      document.getElementById("responseMsg").textContent = "❌ 發送失敗：" + JSON.stringify(error);
    });
});
