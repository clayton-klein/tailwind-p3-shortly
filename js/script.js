// =========================== Form ============================
const linkForm = document.getElementById("link-form");
const linkInput = document.getElementById("link-input");
const alertMsg = document.getElementById("alert-msg");

linkForm.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  if (!linkInput.value) {
    linkInput.classList.add("border-red");
    alertMsg.innerText = "Please enter a URL.";
    return;
  } else if (!validURL(linkInput.value)) {
    linkInput.classList.add("border-red");
    alertMsg.innerText = "Please enter a valid URL.";
    return;
  } else {
    linkInput.classList.remove("border-red");
    linkInput.value = "";
    alertMsg.innerText = "";
    alert("Success!");
  }
}

// Validate a URL
function validURL(str) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

// =========================== Hamburger Menu ============================

// Hamburger icon/menu (mobile only)
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

// Toggle hamburger menu (mobile only)
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
