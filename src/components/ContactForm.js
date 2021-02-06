import React from 'react'


const ContactForm = (props) => (
  <form
    name="contact" 
    method="post" 
    data-netlify="true"  
    >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact" />
    <div id="contactInfo">
        <label htmlFor="name">Name *</label>
        <input type="text" name="name" id="name" aria-required/>
        <label htmlFor="email">Email *</label>
        <input type="text" name="email" id="email" aria-required/>
    </div>
    <div id="messageBox">
        <label htmlFor="message">Your issues or interests</label>
        <textarea name="message" id="message" rows="6"></textarea>
    </div>
      <button type="submit">Send</button>
  </form>
           
)

export default ContactForm
