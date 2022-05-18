function sendMail(contactForm) {
    // Padd through values from form to emailjs template variables+
    emailjs.send("service_p5btvn8","template_hn8lbiw",{
        to_name: contactForm.friendsname.value,
        to_email: contactForm.friendsemail.value,
        })
        .then (
            function(response) {
                console.log("sucess", response);
                form = document.getElementById('invite_form');
                form.innerHTML += `<h2>Email sent</h2><p>Your email was sucessfully sent to your friend, QuizBox Team</p>`;

            },
            function(error) {
                console.log("error", error);
            }
        );
        document.getElementById("invite_form").reset();
        return false;  // To block from loading a new page
}
