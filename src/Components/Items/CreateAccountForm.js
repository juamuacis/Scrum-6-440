import { useRef} from 'react';

import Card from "../ui/Card";
import classes from './CreateAccountForm.module.css'

function CreateAccountForm (props) {
const EmailInputRef = useRef();
const passwordInputRef = useRef();
const firstNameInputRef = useRef();
const lastNameInputRef = useRef();
const venmoInputRef = useRef();
const cashAppInputRef = useRef();

function submitHandler(event) {
    event.preventDefault();
    
    const enteredEmail = EmailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredVenmoUserName = venmoInputRef.current.value;
    const enteredCashAppUserName = cashAppInputRef.current.value;

    const accountData = {
        Email: enteredEmail,
        password: enteredPassword,
        firstName: enteredFirstName,
        secondName: enteredLastName,
        venmoUserName: enteredVenmoUserName,
        cashAppUserName: enteredCashAppUserName
    };

    props.onSignIn(accountData);
}

    return <Card>
<form className = {classes.form} onSubmit={submitHandler}>
<div className = {classes.control}>
    <label htmlFor="firstName">First Name</label>
    <input type="text" required id="firstName" ref = {firstNameInputRef}/>
</div>
<div className = {classes.control}>
    <label htmlFor="lastName">Last Name</label>
    <input type="text" required id="lastName" ref = {lastNameInputRef}/>
</div>
<div className = {classes.control}>
    <label htmlFor="Email">School Email</label>
    <input type="email" required id="Email" ref = {EmailInputRef}/>
</div>
<div className = {classes.control}>
    <label htmlFor="password">Password</label>
    <input type="text" required id="password" ref = {passwordInputRef}/>
</div>
<div className = {classes.control}>
    <label htmlFor="venmoUserName">Venmo Username (If none, leave blank)</label>
    <input type="text" required id="password" ref = {venmoInputRef}/>
</div>
<div className = {classes.control}>
    <label htmlFor="cashAppUserName">CashApp Username (If none, leave blank)</label>
    <input type="text" required id="cashAppUsername" ref = {cashAppInputRef}/>
</div>
<div className = {classes.actions}>
    <button>Create Account</button>
</div>
</form>
    </Card>
}

export default CreateAccountForm;