function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceId = "service_p4k88la";
  const templateId = "template_ibnejxn";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("your message sent successfully");
    })
    .cacth((err) => console.log(err));
}
