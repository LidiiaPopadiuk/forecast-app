import x from './SignUp.module.scss'
import { useState } from 'react'

export const SignUp = ({closeModal, openModal}) => {

    const submitted = (e) => {
        e.preventDefault()
        console.log('submitted');    
        closeModal()
    }

    return (
        <div className={x.up__backdrop}>
            <div className={x.up}>
            <h2 className={x.up__title}>Sign up</h2>
            <form onSubmit={submitted} className={x.up__form}>
                <label className={x.up__label} htmlFor="username">Username</label>
                <input className={x.up__input} id='username' placeholder='Username' type="text" required />
                <label className={x.up__label} htmlFor="email">E-Mail</label>
                <input className={x.up__input} id='email' placeholder='E-Mail' type="email" required />
                <label className={x.up__label} htmlFor="password">Password</label>
                <input className={x.up__input2} id='password' placeholder='Password' type="password" required />
            </form>
            <div>
                <button type='submit' className={x.up__btn} onClick={submitted}>Sign up</button>
                <p className={x.up__parag}>Already have an account? <span onClick={openModal} className={x.up__span}>Log In</span></p>
            </div>
        </div>
        </div>
    )
}