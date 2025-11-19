function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceId = "service_ou4g4pd";
  const templateId = "template_ibnejxn";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      // Pulisce i campi del form
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

      // Crea un messaggio dinamico
      const msg = document.createElement("p");
      msg.textContent = "Email inviata con successo!";
      msg.style.color = "green";
      msg.style.position = "fixed";
      msg.style.top = "20px";
      msg.style.right = "20px";
      msg.style.background = "#f0f0f0";
      msg.style.padding = "10px 20px";
      msg.style.borderRadius = "5px";
      msg.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
      msg.style.zIndex = 1000;

      document.body.appendChild(msg);

      // Rimuove il messaggio dopo 3 secondi
      setTimeout(() => {
        msg.remove();
      }, 3000);

      console.log(res);
    })
    .catch((err) => {
      console.log(err);

      // Messaggio di errore dinamico
      const msg = document.createElement("p");
      msg.textContent = "Si è verificato un errore nell'invio della mail.";
      msg.style.color = "red";
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
    });
}
