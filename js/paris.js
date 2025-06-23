<script>
    const emailBtn = document.getElementById("emailBtn");
    const whatsappBtn = document.getElementById("whatsappBtn");

    emailBtn.addEventListener("click", function (e) {
        e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const subject = encodeURIComponent("Contact from " + name);
    const body = encodeURIComponent("Name: " + name + "\\nEmail: " + email + "\\n\\nMessage:\\n" + message);
    window.location.href = "mailto:maishiteffo3@gmail.com?subject=" + subject + "&body=" + body;

   // window.location.href = "mailto:info@parisindustries.co.za?subject=" + subject + "&body=" + body;
    });

    whatsappBtn.addEventListener("click", function (e) {
        e.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const fullMessage = encodeURIComponent("Hi, I'm " + name + ". " + message);
    const phone = "276374503094"; // WhatsApp number in international format
    window.open("https://wa.me/" + phone + "?text=" + fullMessage, "_blank");
    });
</script>
