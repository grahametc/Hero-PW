const serviceID = "service_s8jlz8k";
const templateID = "template_vyy13df";

(function() {
    console.log('start');
    emailjs.init({
      publicKey: "ShlvlNLDnKUCJtNIN"
    });
    console.log('end');
})();
console.log(document.getElementById('contact-form'));
  window.onload = function() {
    console.log('h');
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        console.log(event);
        console.log(this);
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm(serviceID, templateID, this, 'ShlvlNLDnKUCJtNIN')
            .then(() => {
                console.log('SUCCESS!');
                alert("Email sent successfully.");
               document.getElementById('contact-form').reset(); 
            }, (error) => {
                console.log('FAILED...', error);
                alert("Email failed to send. Please try again.");
                document.getElementById('contact-form').reset();
            });
    });

    
}

