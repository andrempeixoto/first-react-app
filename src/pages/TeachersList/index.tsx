import React from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import { subjects, weekdays } from '../../components/Select/data';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';


function TeachersList() {
  return (
    <div id="page-teachers-list" className="container">
      <PageHeader title="These are the Proffys available">
        <form id="search-teachers">
          <Select name="subject" label="Subject" options={subjects}/>
          <Select name="week-day" label="Week day" options={weekdays}/>
          <Input name="time" label="Time" type="time"/>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>

    </div>
  )
}


export default TeachersList;

