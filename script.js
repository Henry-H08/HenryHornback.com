// Small client-side helpers: highlight active nav and validate contact form
document.addEventListener('DOMContentLoaded', function(){
  // Active nav is handled server-side via 'active' class in each page.
  // Contact form validation
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();
      const formMsg = document.getElementById('formMsg');
      if(!name || !email || !msg){
        formMsg.textContent = 'Please fill out all fields.';
        return;
      }
      // simulate submission
      formMsg.textContent = 'Thanks! Your message looks good — replace this with your backend endpoint to actually send messages.';
      form.reset();
      setTimeout(()=>formMsg.textContent = '',4000);
    });
  }
});