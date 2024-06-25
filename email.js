function sendEmail(){
   let params = {
    name: document.getElementById("from_name").value,
    email: document.getElementById("from_email").value,
    phone: document.getElementById("phone_number").value,
    message: document.getElementById("message").value
   } 
   emailjs.send("service_s8jlz8k", "template_vyy13df", params).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
}

function validateEmail(email){

}
