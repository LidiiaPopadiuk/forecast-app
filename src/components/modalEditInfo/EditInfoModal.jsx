import { DiVim } from 'react-icons/di'
import x from './EditInfoModal.module.scss'

export const EditInfoModal = ({ closeEditInfoModal, setUserName }) => {
    const nameInfoUser = localStorage.getItem('userName')
    const emailInfoUser = localStorage.getItem('userEmail')

    const userLogOut = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("loginTime");

        setUserName("")
        closeEditInfoModal()
    }
    return (
        <div onClick={closeEditInfoModal} className={x.info__backdrop}>
            <div onClick={(e) => e.stopPropagation()} className={x.info}>
                <h2 className={x.info__title}>Your own information</h2>
                {/* <div className={x.info__wrapper}> */}
                <h3 className={x.info__subtitle}>Your name: {nameInfoUser}</h3>
                <h3 className={x.info__subtitle}>Your email: {emailInfoUser}</h3>
                <button onClick={userLogOut} className={x.info__out}>Sign out</button>
                {/* </div> */}
            </div>
        </div>
    )
}