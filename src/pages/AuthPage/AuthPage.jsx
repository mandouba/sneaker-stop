import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm  from "../../components/SignUpForm/SignUpForm"
import {useState} from 'react'
import './AuthPage.css';

export default function AuthPage({setUser}) {
    const [currentForm, setCurrentForm] = useState('login')

    function handleClick() {
        if(currentForm === 'login') {
            setCurrentForm('signup')
        } else {
            setCurrentForm('login')
        }
    }
    return (
        <main>
            <input type='image' id='logo' src='https://i.imgur.com/oEM6UIC.png'></input>
            <h3 onClick={handleClick}> 
                {
                    currentForm === 'login' ?
                    "Sign Up"
                    :
                    "Log In"
                }
            </h3>
            {
                currentForm === 'login' ?
                <LoginForm setUser={setUser} />
                :
                <SignUpForm setUser={setUser} />
            }
        </main>
    )
}