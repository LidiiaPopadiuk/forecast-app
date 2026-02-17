import x from './SignIn.module.scss'
import { useState } from 'react'

export const SignIn = ({ closeModal, setUserName }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const disabledBtn = email && password.length >= 5

    const submitted = (e) => {
        e.preventDefault()

        const storedName = localStorage.getItem('userName')
        const storedEmail = localStorage.getItem('userEmail')
        const storedPassword = localStorage.getItem('userPassword')

        if (email === storedEmail && password === storedPassword) {
            localStorage.setItem('isLoggedIn', true)
            localStorage.setItem('loginTime', Date.now().toString())

            setUserName(storedName)
            closeModal()
        } else {
            alert('Wrong email or password')
        }
    }

    return (
        <div onClick={closeModal} className={x.in__backdrop}>
            <div className={x.in} onClick={(e) => e.stopPropagation()}>
                <h2 className={x.in__title}>Sign in</h2>
                <form onSubmit={submitted} className={x.in__form}>
                    <label className={x.in__label} htmlFor="email">E-Mail</label>
                    <input className={x.in__input} id='email' placeholder='E-Mail' type="email" onChange={(e) => setEmail(e.target.value)} required />
                    <label className={x.in__label} htmlFor="password">Password</label>
                    <input className={x.in__input2} id='password' placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)} required />
                </form>
                <div>
                    <button disabled={!disabledBtn} type='submit' className={x.in__btn} onClick={submitted}>Sign in</button>
                </div>
            </div>
        </div>
    )
}