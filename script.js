/* scroll suave mobile */

document.querySelector(".scroll-btn")
?.addEventListener("click", () => {
  document.querySelector(".form-section")
    .scrollIntoView({ behavior: "smooth" });
});


/* GOOGLE SHEETS */
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.querySelector("input[placeholder='Nome']").value,
    email: form.querySelector("input[placeholder='E-mail']").value,
    whatsapp: form.querySelector("input[placeholder='DDD+WhatsApp']").value
  };

  const btn = form.querySelector("button");
  btn.innerText = "Enviando...";
  btn.disabled = true;

  try{
    await fetch("https://script.google.com/macros/s/AKfycbzf_yvEBbW3CFIWhvifzkG0iQyySHiwdPCc8MslFlKHvXlU7sXgqtYWztPv-UtGpV1ukQ/exec", {
      method: "POST",
      body: JSON.stringify(data)
    });

    btn.innerText = "Inscrição realizada✅";
    form.reset();

  }catch(err){
    btn.innerText = "Erro ❌";
    btn.disabled = false;
  }
});
