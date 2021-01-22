import React from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';


function TeachersList() {
  return (
    <div id="page-teachers-list" className="container">
      <PageHeader title="These are the Proffys available">
        <form id="search-teachers">
          <Input name="subject" label="Subject"/>
          <Input name="week-day" label="Week day"/>
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

