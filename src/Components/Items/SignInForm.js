import { useRef} from 'react';

import Card from "../ui/Card";
import classes from './SignInForm.module.css'

function SignInForm (props) {
const usernameInputRef = useRef();
const passwordInputRef = useRef();

function submitHandler(event) {
    event.preventDefault();
    
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const accountData = {
        username: enteredUsername,
        password: enteredPassword
    };

    props.onSignIn(accountData);
}


    return <Card>
<form className = {classes.form} onSubmit={submitHandler}>
<div className = {classes.control}>
    <label htmlFor="username">User Name</label>
    <input type="text" required id="username" ref = {usernameInputRef}/>
</div>
<div className = {classes.control}>
    <label htmlFor="password">Password</label>
    <input type="text" required id="password" ref = {passwordInputRef}/>
</div>
<div className = {classes.actions}>
    <button>Sign In</button>
</div>
</form>
    </Card>
}

export default SignInForm;