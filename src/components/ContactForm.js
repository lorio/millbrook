import React from 'react'


const ContactForm = (props) => (
  <form
    name="contact" 
    method="post" 
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    >
    <input type="hidden" name="form-name" value="contact" />
    <div class="user-info">
        <label htmlFor="name">Name *</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email *</label>
        <input type="text" name="email" id="email" />
    </div>
    <div class="message-box">
        <label htmlFor="message">Your issues or interests *</label>
        <textarea name="message" id="message" rows="5"></textarea>
        <button type="submit">Send</button>
    </div>
      
  </form>
           
)

export default ContactForm
