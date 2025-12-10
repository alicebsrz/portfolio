import React, { useState } from 'react';
import { Mail, Linkedin, Github, MessageCircle, Paperclip, Heart } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import './Contact.css';

const Contact = () => {
  const { texts } = useLanguage();
  // Estado para controlar o loading do botão
  const [isSending, setIsSending] = useState(false);

  if (!texts) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true); // Ativa o "Enviando..."

    // Pega os dados do formulário
    const formData = new FormData(e.target);
    
    // URL do Formspree
    const formspreeUrl = "https://formspree.io/f/xeoyreap"; 

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso! 💌 Vou te responder em breve.");
        e.target.reset(); // Limpa os campos
      } else {
        alert("Opa! Houve um erro ao enviar. Tente me chamar no LinkedIn/WhatsApp.");
      }
    } catch (error) {
      alert("Erro de conexão. Verifique sua internet.");
    } finally {
      setIsSending(false); // Desativa o "Enviando..."
    }
  };

  return (
    <section id="contato" className="contact-section">
      <div className="contact-wrapper">
        <div className="top-area">
          <div className="message-box">
            <h2 className="message-title">
              {texts.contact.title}
            </h2>
            <p className="message-text">
              {texts.contact.message}
              <br /><br />
              {texts.contact.message2} ✨
            </p>
          </div>

          <div className="contact-card">
            <a href="mailto:alicebarbosadev@gmail.com" className="contact-item">
              <div className="icon-box"><Mail size={20} /></div>
              <span>{texts.contact.email}</span>
            </a>
            <a href="https://www.linkedin.com/in/alicebarbosa0101" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="icon-box"><Linkedin size={20} /></div>
              <span>{texts.contact.linkedin}</span>
            </a>
            <a href="https://github.com/alicebsrz" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="icon-box"><Github size={20} /></div>
              <span>{texts.contact.github}</span>
            </a>
            <a href="https://wa.me/552298805436?text=Olá,%20Alice!%20Vim%20pelo%20seu%20portfólio." target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="icon-box"><MessageCircle size={20} /></div>
              <span>{texts.contact.whatsapp}</span>
            </a>
          </div>
        </div>

        <div className="form-container">
          <Paperclip className="form-clip" size={40} />
          <h3 className="form-title">{texts.contact.formTitle} ✨</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="input-label">{texts.contact.formName}</label>
              <input type="text" name="name" placeholder={texts.contact.formNamePlaceholder} className="custom-input" required />
            </div>
            <div className="input-group">
              <label className="input-label">{texts.contact.formEmail}</label>
              <input type="email" name="email" placeholder={texts.contact.formEmailPlaceholder} className="custom-input" required />
            </div>
            <div className="input-group">
              <label className="input-label">{texts.contact.formMessage}</label>
              <textarea name="message" placeholder={texts.contact.formMessagePlaceholder} className="custom-textarea" required></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSending}>
              {isSending ? "Enviando..." : texts.contact.submitBtn} {!isSending && <Heart size={18} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
