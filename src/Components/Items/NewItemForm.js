import { useRef} from 'react';

import Card from "../ui/Card";
import classes from './NewItemForm.module.css'

function NewItemForm (props) {
const titleInputRef = useRef();
const priceInputRef = useRef();
const imageInputRef = useRef();
const descriptionInputRef = useRef();

function submitHandler(event) {
    event.preventDefault();
    
    const enteredTitle = titleInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const itemData = {
        title: enteredTitle,
        price: enteredPrice,
        image: enteredImage,
        description: enteredDescription

    };

    props.onAddItem(itemData);
}


    return <Card>
<form className = {classes.form} onSubmit={submitHandler}>
<div className = {classes.control}>
    <label htmlFor="title">Item Title</label>
    <input type="text" required id="title" ref = {titleInputRef}/>
</div>
<div className = {classes.control}>
    <label htmlFor="price">Price</label>
    <input type="integer" required id="price" ref = {priceInputRef}/>
</div>
<div className = {classes.control}>
    <label htmlFor="image">Item Image</label>
    <input type="url" required id="image" ref = {imageInputRef}/>
</div>
<div className = {classes.control}>
    <label htmlFor="description">Item Description</label>
    <textarea id="description" required rows='5' ref = {descriptionInputRef}/>
</div>
<div className = {classes.actions}>
    <button>Add Item</button>
</div>
</form>
    </Card>
}

export default NewItemForm;