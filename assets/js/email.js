function sendMail() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validazione semplice dell'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    showMessage("Inserisci una email valida.", "red");
    return; // interrompe l'invio
  }

  // Validazione nome e messaggio vuoti (opzionale)
  if (!name || !message) {
    showMessage("Compila tutti i campi prima di inviare.", "red");
    return;
  }

  const params = { name, email, message };
  const serviceId = "service_ou4g4pd";
  const templateId = "template_ibnejxn";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      // Pulisce i campi
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

      showMessage("Email inviata con successo!", "green");
      console.log(res);
    })
    .catch((err) => {
      showMessage("Errore nell'invio della mail.", "red");
      console.log(err);
    });
}

// Funzione per mostrare messaggi dinamici
function showMessage(text, color) {
  const msg = document.createElement("p");
  msg.textContent = text;
  msg.style.color = color;
  msg.style.position = "fixed";
  msg.style.top = "20px";
  msg.style.right = "20px";
  msg.style.background = "#f0f0f0";
  msg.style.padding = "10px 20px";
  msg.style.borderRadius = "5px";
  msg.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
  msg.style.zIndex = 1000;

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 3000);
}
