import { useRef} from 'react';

import Card from "../ui/Card";
import classes from './NewItemForm.module.css'

function ContactForm (props) {
const subjectInputRef = useRef();
const messageInputRef = useRef();


function submitHandler(event) {
    event.preventDefault();
    
    const enteredSubject = subjectInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;
  

    const contactData = {
        Subject: enteredSubject,
        Message: enteredMessage,

    };

    props.onAddItem(contactData);
}

    return <Card>
<form className = {classes.form} onSubmit={submitHandler}>
<div className = {classes.control}>
    <label htmlFor="subject">Subject of issue</label>
    <input type="text" required id="subject" ref = {subjectInputRef}/>
</div>
<div className = {classes.control}>
    <label htmlFor="messsage">Describe your problem</label>
    <textarea id="message" required rows='5' ref = {messageInputRef}/>
</div>
<div className = {classes.actions}>
    <button>Submit</button>
</div>
</form>
    </Card>
}

export default ContactForm;