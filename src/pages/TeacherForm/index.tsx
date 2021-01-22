import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="It's awesome that you want to teach!"
        description="The first step is to fill in this form"
      />

      <main>
        <fieldset>
          <legend>Your profile</legend>
          <Input name="name" label="Full Name"/>
          <Input name="avatar" label="Avatar"/>
          <Input name="telegram" label="Telegram"/>
        </fieldset>

        <fieldset>
          <legend>The class you'll teach</legend>
          <Input name="subject" label="Subject"/>
          <Input name="price" label="Price (per hour)"/>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="important notice"/>
            Important! <br/>
            Fill in all the fields
          </p>

          <button type="button">
            Save profile
          </button>
        </footer>

      </main>
    </div>
  );
}

export default TeacherForm;
