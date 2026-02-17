import logo from '../../img/logoPng.png'
import userLogin from '../../img/userlogin.png'
import x from './Header.module.scss'

export const Header = ({openModal}) => {
    return (
        <header className={x.header}>
            <div className="container">
                <div className={x.header__mainwrapp}>
                    <div className={x.header__wrapper}>
                    <img className={x.header__logo} src={logo} alt="logo" />
                    <nav className={x.header__nav}>
                        <ul className={x.header__list}>
                            <li className={x.header__item}><a className={x["header__item--link"]} href="#">Who we are</a></li>
                            <li className={x.header__item}><a className={x["header__item--link"]} href="#">Contacts</a></li>
                            <li className={x.header__item}><a className={x["header__item--link"]} href="#">Menu</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={x.header__authoriz}>
                    <button onClick={openModal} className={x.header__sign}>Sign Up</button>
                    <button className={x.header__profile}>
                        <img src={userLogin} alt="img user login" />
                    </button>
                </div>
                </div>
            </div>
        </header>
    )
}