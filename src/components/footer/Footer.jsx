import x from './Footer.module.scss'
import footerPng from '../../img/footerPng.png'
import insta from '../../img/iinsta.svg'
import facebook from '../../img/facebb.svg'
import whatsapp from '../../img/whatsapp.svg'

export const Footer = () => {
    return (
        <div className={x.footer}>
            <div className='container'>
                <div className={x.footer__wrapper}>
                    <img src={footerPng} alt="logo" />
                    <div className={x.footer__geo}>
                        <h3 className={x.footer__title}>Address</h3>
                        <p className={x.footer__parag}><a target='_blanck' className={x.footer__subtitle} href="https://www.google.com/maps/search/Svobody+str.+35+Kyiv+Ukraine/@50.5588768,29.097426,8.25z?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D">Svobody str. 35 Kyiv Ukraine</a></p>
                    </div>
                    <div className={x.footer__social}>
                        <h3 className={x.footer__title}>Contact us</h3>
                        <div className={x.footer__wrappbtn}>
                            <button className={x.footer__btn}><a target='_blanck' href="https://www.instagram.com/"><img src={insta} alt="Instagram" /></a></button>
                            <button className={x.footer__btn}><a target='_blanck' href="https://www.facebook.com/"><img src={facebook} alt="Facebook" /></a></button>
                            <button className={x.footer__btn}><a target='_blanck' href="https://web.whatsapp.com/"><img src={whatsapp} alt="Whatsapp" /></a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}