import x from './SignIn.module.scss'

export const SignIn = ({closeModal}) => {

    const submitted = (e) => {
        e.preventDefault()
        console.log('submitted');    
        closeModal()
    }

    return (
         <div className={x.in__backdrop}>
            <div className={x.in}>
            <h2 className={x.in__title}>Sign in</h2>
            <form onSubmit={submitted} className={x.in__form}>
                <label className={x.in__label} htmlFor="email">E-Mail</label>
                <input className={x.in__input} id='email' placeholder='E-Mail' type="email" required />
                <label className={x.in__label} htmlFor="password">Password</label>
                <input className={x.in__input2} id='password' placeholder='Password' type="password" required />
            </form>
            <div>
                <button type='submit' className={x.in__btn} onClick={submitted}>Sign in</button>
            </div>
        </div>
        </div>
    )
}