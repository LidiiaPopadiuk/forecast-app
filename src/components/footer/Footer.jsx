import x from './Footer.module.scss'
import footerPng from '../../img/footerPng.png'
import insta2 from '../../img/instagram2.svg'
import facebook from '../../img/facebb.svg'
import whatsapp from '../../img/whatsapp.svg'

export const Footer = () => {
    return (
        <footer className={x.footer}>
            <div className='container'>
                <div className={x.footer__wrapper}>
                    <img className={x.footer__logo} src={footerPng} alt="logo" />
                    <div className={x.footer__mainWrapper}>
                        <div className={x.footer__geo}>
                        <h3 className={x.footer__title}>Address</h3>
                        <p className={x.footer__parag}><a target='_blanck' className={x.footer__subtitle} href="https://www.google.com/maps/search/Svobody+str.+35+Kyiv+Ukraine/@50.5588768,29.097426,8.25z?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D">Svobody str. 35 Kyiv <br /> Ukraine</a></p>
                    </div>
                    <div className={x.footer__social}>
                        <h3 className={x.footer__title}>Contact us</h3>
                        <div className={x.footer__wrappbtn}>
                            <a target='_blanck' href="https://www.instagram.com/"><img className={x.footer__imgNav} src={insta2} alt="Instagram" /></a>
                            <a target='_blanck' href="https://www.facebook.com/"><img className={x.footer__imgNav} src={facebook} alt="Facebook" /></a>
                            <a target='_blanck' href="https://web.whatsapp.com/"><img className={x.footer__imgNav} src={whatsapp} alt="Whatsapp" /></a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}