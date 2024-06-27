export default function sendEmail() {
    document.querySelector('form button').addEventListener("click", (event) => {

      event.preventDefault();

      const contact = {
        name: document.querySelector(".input-nome").value,
        email: document.querySelector(".input-email").value,
        text: document.querySelector(".input-texto").value,
        alert: document.querySelector(".mensagem-alerta")
      }

      contact.alert.innerHTML = "";
      contact.alert.classList.remove("mensagem-sucesso");

      const message = [
        'Por favor, preencha todos os campos.',
        'Obrigado, email enviado com Sucesso.',
        'Ops... Parece que seu e-mail está incompleto'
      ]

      if (((contact.name || contact.email) == "") || contact.text == "") return contact.alert.innerHTML += message[0];

      const verifyEmail = /\S+@\S+\.\S+/;

      if (!verifyEmail.test(contact.email)) return contact.alert.innerHTML += message[2];

      (async () => {
        await fetch('https://old-cloud-9768.fly.dev/user/email', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(contact)
        }).then(async (res) => {

          if (res.status == 201) {
            const form = document.querySelector("form");
            form.reset();

            contact.alert.innerHTML += message[1];
            contact.alert.classList.add("mensagem-sucesso");

            return;
          }

          let result = await res.json();
          contact.alert.innerHTML += result.message[0];

        }).catch(err => {
          contact.alert.innerHTML += err.message;
        });

      })();

    });
  }