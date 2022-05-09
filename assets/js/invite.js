function sendMail(contactForm) {
    emailjs.send("service_p5btvn8","template_hn8lbiw",{
        to_name: contactForm.friendsname.value,
        to_email: contactForm.friendsemail.value,
        })
        .then (
            function(response) {
                console.log("sucess", response);
                form = document.getElementById('invite_form');
                form.innerHTML += `<h1>email sent</h1>`;

            },
            function(error) {
                console.log("error", error);
            }
        );
        document.getElementById("invite_form").reset();
        return false;  // To block from loading a new page
}
