import { use, useRef, useState } from 'react'
import logo from '../../img/logoPng.png'
import userLogin from '../../img/userlogin.png'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import x from './Header.module.scss'

export const Header = ({ openModal, userName, openSignInModal, openEditInfoModal }) => {
    const [isOpen, setIsOpen] = useState(false)

    const porfileClick = () => {
        if (userName) {
            openEditInfoModal()
        } else {
            openSignInModal()
        }
    }

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <header className={x.header}>
            <div className="container">
                <div className={x.header__mainwrapp}>
                    <div className={x.header__wrapper}>
                        <img className={x.header__logo} src={logo} alt="logo" />
                        {/* <div onClick={showItems} className={x.header__menuWrapper}>
                            <a className={x.headder__menu}>Menu</a>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 0.5L4.74264 4.74264L8.98528 0.5" stroke="black" stroke-linecap="round" />
                            </svg>
                        </div> */}
                        <nav className={x.header__nav}>
                            <ul className={x.header__list}>
                                <li className={x.header__item}><a className={x["header__item--link"]} href="#">Who we are</a></li>
                                <li className={x.header__item}><a className={x["header__item--link"]} href="#">Contacts</a></li>
                                <li className={x.header__item}><a className={x["header__item--link"]} href="#">Menu</a></li>
                            </ul>
                        </nav>

                        <div onClick={toggleMenu} className={x.header__menuWrapper}>
                            <a className={x.header__menu}>Menu</a>
                            {isOpen ? <SlArrowRight size={10}/> : <SlArrowDown size={10}/>}
                        </div>
                    </div>
                    <div className={x.header__authoriz}>
                        {userName ? <p className={x.header__username}>Hey, {userName}!</p> : <button onClick={openModal} className={x.header__sign}>Sign Up</button>}
                        <button onClick={porfileClick} className={x.header__profile}>
                            <img className={x.header__imgProfile} src={userLogin} alt="img user login" />
                        </button>
                    </div>
                </div>

                <div className={`${x.mobileMenu} ${isOpen ? x.active : ''}`}>
                    <div className='container'>
                       <div className={x.header__mainDiv}>
                         < ul className={x.mobileList}>
                            <li className={x.header__item}><a className={x["header__item--link"]} href="#">Who we are</a></li>
                            <li className={x.header__item}><a className={x["header__item--link"]} href="#">Contacts</a></li>
                            <li className={x.header__item}><a className={x["header__item--link"]} href="#">Menu</a></li>
                        </ul>
                        <div className={x.header__mobileAuthoriz}>
                            {userName ? <p className={x.header__username}>Hey, {userName}!</p> : <button onClick={openModal} className={x.header__mobileSign}>Sign Up</button>}
                            <button onClick={porfileClick} className={x.header__mobileProfile}>
                                <img className={x.header__img} src={userLogin} alt="img user login" />
                            </button>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </header>
    )
}