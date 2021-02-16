import React from 'react'


const ContactForm = (props) => (
  <form
    name="contact" 
    method="post"
    aria-labelledby="h2"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    >
    <input type="hidden" name="form-name" value="contact" />
    <div className="user-info">
        <label htmlFor="name">Name *</label>
        <input type="text" name="name" id="name" aria-label={`labelText`} aria-required={true} />
        <label htmlFor="email">Email *</label>
        <input type="text" name="email" id="email" aria-label={`labelText`} aria-required={true} />
    </div>
    <div className="message-box">
        <label htmlFor="message">Your issues or interests *</label>
        <textarea name="message" id="message" rows="5" maxLength="200"></textarea>
        <button type="submit">Send</button>
    </div>
      
  </form>
           
)

export default ContactForm
