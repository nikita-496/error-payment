import "./style.css";
import image from "./payment-failed.webp";

document.querySelector("#app").innerHTML = `
  <div>
  <div class="error-page">
  <img src="${image}" class="error-image" alt="payment-failed" />
  <div class="container-error-payment failure-case">
    <h1 class="error-header">Оплата не удалась!</h1>
  </div>
</div>
  </div>
`;
