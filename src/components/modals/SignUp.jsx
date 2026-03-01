import { toast } from 'react-toastify'
import x from './SignUp.module.scss'
import { useState } from 'react'

export const SignUp = ({ closeModal, openModal, setUserName }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isFormValid = email && password.length >= 5

    const submitted = (e) => {
        e.preventDefault()
        console.log('submitted');

        if (password.length < 5) {
            toast("Password must be at least 5 characters long!");
            return;
        }

        const savedEmail = localStorage.getItem('userEmail')

        if (savedEmail === email) {
            toast("An account with this email already exists. Please log in.")
            return
        }

        if (!isFormValid) return
        localStorage.setItem('userName', name)
        localStorage.setItem('userEmail', email)
        localStorage.setItem('userPassword', password)

        localStorage.setItem('isLoggedIn', true)
        localStorage.setItem('loginTime', Date.now().toString())
        console.log('Saved to localStorage:', { name, email, password })

        setUserName(name)

        closeModal()
    }

    return (
        <div onClick={closeModal} className={x.up__backdrop}>
            <div className={x.up} onClick={(e) => e.stopPropagation()}>
                <h2 className={x.up__title}>Sign up</h2>
                <form onSubmit={submitted} className={x.up__form}>
                    <label className={x.up__label} htmlFor="username">Username</label>
                    <input className={x.up__input} id='username' placeholder='Username' type="text" onChange={(e) => setName(e.target.value)} required />
                    <label className={x.up__label} htmlFor="email">E-Mail</label>
                    <input className={x.up__input} id='email' placeholder='E-Mail' type="email" onChange={(e) => setEmail(e.target.value)} required />
                    <label className={x.up__label} htmlFor="password">Password</label>
                    <input className={x.up__input2} id='password' placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)} required />
                </form>
                <div>
                    <button type='submit' className={x.up__btn} onClick={submitted}>Sign up</button>
                    <p className={x.up__parag}>Already have an account? <span onClick={openModal} className={x.up__span}>Log In</span></p>
                </div>
            </div>
        </div>
    )
}