import styles from './EventList.module.css'

const EventList = ({events, handleClick}) => {
    return ( 
      <div>
        { events.map((event, index) => (
            <div className={styles.card} key={event.id}>
              <h2>{index+1} - {event.title}</h2>
              <p><b>{event.location}</b> | {event.date}</p>
              <button onClick={() => handleClick(event.id)}>Delete event</button>
            </div>
        ))}
      </div>  
     );
}
 
export default EventList;