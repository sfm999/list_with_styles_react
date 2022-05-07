import { useState } from "react"
import "./NewEventForm.css"

const NewEventForm = ({addEvent}) => {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('sydney')

    const resetForm = () => {
        setTitle('')
        setDate('')
        setLocation('sydney')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const event = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000)
        }
        console.log(event)
        addEvent(event)
        resetForm()
    }

    const newLocation = ""
    
    
    return ( 
        <form className="new-event-form" onSubmit={handleSubmit}>
            <label>
                <span>Event Title:</span>
                <input 
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} 
                />
            </label>

            <label>
                <span>Event Date:</span>
                <input 
                    type="date" 
                    onChange={(e) => setDate(e.target.value)}
                    value={date}/>
            </label>
            <label>
                <span>Event Location:</span>           
                <select onChange={(e) => setLocation(e.target.value)}>
                    <option value="Sydney">Sydney</option>
                    <option value="Melbourne">Melbourne</option>
                    <option value="Brisbane">Brisbane</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
     );
}
 
export default NewEventForm;