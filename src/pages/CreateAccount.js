
import { useNavigate } from 'react-router-dom';
import CreateAccountForm from "../Components/Items/CreateAccountForm";

import classes from './CreateAccount.module.css';


function CreateAccount() {

  const navigate = useNavigate();
  function createHandler(accountData) {
    
    fetch('https://csuf-online-shop-default-rtdb.firebaseio.com/accounts.json',
      {
        method: 'POST',
        body: JSON.stringify(accountData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(()=> {
      navigate('/', {replace: true});
    });
    }
    

  return (
    <div >
      <h1 className={classes.h1}>Welcome to the CSUF Online Exchange!</h1>
      <h3 className={classes.h3}>Please input your CSUF email and choose a password</h3>
      <CreateAccountForm onSignIn ={createHandler} />

    </div>
  )
};

export default CreateAccount;