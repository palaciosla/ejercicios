import React from "react";
import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'nombre' es requerido.";
    
  } else if(!regexName.test(form.name.trim())) {
      errors.name = "El nombre no es válido."
  }

  if(!form.email.trim()) {
      errors.email = "El campo 'email' es requerido";
  } else if(!regexEmail.test(form.email.trim())) {
    errors.email = "El email no es válido."
}

  if(!form.subject.trim()) {
      errors.subject = "El campo 'asunto' es requerido";
  }

  if(!form.comments.trim()) {
      errors.comments = "El campo 'comentarios' es requerido";
  } else if(!regexComments.test(form.comments.trim())) {
    errors.comments = "El comentario no puede superar los 255 caracteres."
}

  return errors;
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="container">
      <h2 className="form-title">Formulario de Contacto</h2>
      <form className="form" action="https://formsubmit.co/palaciosleandroad@gmail.com" method="POST">
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Escribe tu asunto"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        {errors.subject && <p className="error">{errors.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe un comentario"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        />
        {errors.comments && <p className="error">{errors.comments}</p>}
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ContactForm;