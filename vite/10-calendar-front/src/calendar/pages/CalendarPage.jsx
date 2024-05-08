import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar } from "react-big-calendar";
import { addHours } from "date-fns";

import { CalendarEvent, Navbar } from "../components";
import { localizer, getMessagesES } from '../../helpers';
import { useState } from 'react';

const events = [{
  title: 'Ir a trabajar',
  notes: 'Trabajo',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
      _id: '123',
      name: 'Luis'
  }
}]


export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView')|| 'week')

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }


  const onDoubleClick = (event) => {
    console.log({doubleClick: event})
  }

  const onSelect = (event) => {
    console.log({click: event})
  }

  const onViewChange = (event) => {
    localStorage.setItem('lastView', event);
    setLastView(event)
  }

  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={localizer}
        defaultView={lastView}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />
    </>
  );
};
