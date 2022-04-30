
import { useNavigate, Link } from 'react-router-dom';
import SignInForm from "../Components/Items/SignInForm";

function SignInButton() {

  const navigate = useNavigate();
  function signInHandler(accountData) {

    fetch('https://csuf-online-shop-default-rtdb.firebaseio.com/items.json',
      {
        method: 'POST',
        body: JSON.stringify(accountData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      navigate('/Home', { replace: true });
    });
  }


  return (
    <div >
      <SignInForm onSignIn={signInHandler} />
      <p>New User? Create New Account</p>
      <Link to="/CreateAccount" className="btn btn-primary">Sign up</Link>
    </div>
  )
};

export default SignInButton;