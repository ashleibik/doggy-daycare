/* Contact page interactivity
   On click of #submit-button:
   - Prevent the default form submit
   - Append (or update) a confirmation element that reads:
     "Thank you for your message" in 24px font
*/

const form = document.querySelector("form");
const submitBtn = document.getElementById("submit-button");

function showConfirmation() {
  let confirmEl = document.getElementById("confirmation-message");
  if (!confirmEl) {
    confirmEl = document.createElement("p");
    confirmEl.id = "confirmation-message";
    // Insert right after the form
    form.parentNode.insertBefore(confirmEl, form.nextSibling);
  }
  confirmEl.textContent = "Thank you for your message";
  confirmEl.style.fontSize = "24px";
  confirmEl.style.marginTop = "12px";
}

submitBtn.addEventListener("click", function (evt) {
  evt.preventDefault(); // stay on page
  showConfirmation();
});
