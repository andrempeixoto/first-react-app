import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/35813862?s=460&v=4" alt="Andre Peixoto"/>
        <div>
          <strong>Andre Peixoto</strong>
          <span>English</span>
        </div>
      </header>

      <p>
        Enthusiast of human and computer languages.
        <br/> <br/>
        Loves to teach what he learns and to help others in their endeavors to becoming more skilled; more satisfied.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>$ 60/hour</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Contact
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;