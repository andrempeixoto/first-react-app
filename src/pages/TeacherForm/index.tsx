import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import { subjects, weekdays } from '../../components/Select/data';

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
          <Textarea name="bio" label="Bio"/>
        </fieldset>

        <fieldset>
          <legend>The class you'll teach</legend>
          <Select
            name="subject"
            label="Subject"
            options={subjects}
          />
          <Input name="price" label="Price (per hour)"/>
        </fieldset>

        <fieldset>
          <legend>
            Available spots
            <button type="button">+ Add time</button>
          </legend>

          <div className="schedule-item">
            <Select 
              name="week-day"
              label="Week Day"
              options={weekdays}
            />
            <div className="schedule-item-time">
              <Input name="from" label="From:" type="time"/>
              <Input name="to" label="To:" type="time"/>
            </div>
            

          </div>

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
