import { Link } from "react-router-dom";
import x from "./ErrorPage.module.scss";
import panda from './gifs/panda-panda-love.mp4'
import seal from './gifs/mlem-seal.mp4'
import dog from './gifs/adogsmile.mp4'
import capibara from './gifs/groundhog-eating.mp4'

export const ErrorPage = () => {
    return (
        <div className={x.error}>
            <h1 className={x.error__title}>404</h1>
            <p className={x.error__text}>
                Oops! The page you’re looking for doesn’t exist.
            </p>

            <div className={x.error__wrapper}>
                {[panda, seal, dog, capibara].map((video, i) => (
                    <div key={i} className={x.error__items}>
                        <div className={x.error__orbitFix}>
                            <video
                                src={video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={x.error__video}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <Link to="/" className={x.error__link}>
                Go back home
            </Link>
        </div>
    );
};