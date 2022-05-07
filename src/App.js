import './App.css'
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    {title: "Mario's birthday", date: "10/10/2022", location: "Luigi's house", id: 1},
    {title: "Fall off Rainbow Road", date: "05/05/2022", location: "Rainbow Road",  id: 2},
    {title: "Race on Moo Moo Farm", date: "01/01/2023", location: "Moo Moo Farm",  id: 3}
  ])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }


  const handleClick = id => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
  }

  return (
    <div className="App">
      <Title 
        title="Mushroom Kingdom Events"
        subtitle="All the latest events from the Mushroom Kingdom"
      />
      
      <div>
        { 
          showEvents ? <button onClick={() => setShowEvents(false)}>hide events</button>
                     : <button onClick={() => setShowEvents(true)}>show events</button>
        }
      </div>
      { showEvents && <EventList events={events} handleClick={handleClick} /> }
      { showModal && <Modal isSalesModal={true}>
        <NewEventForm  addEvent={addEvent}/>
      </Modal> }
      <br/>
      <button onClick={() => setShowModal(true)}>Add New Event</button>
    </div>
    
  );
}

export default App;
